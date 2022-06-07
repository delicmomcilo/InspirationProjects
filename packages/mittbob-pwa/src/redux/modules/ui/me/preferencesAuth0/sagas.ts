import { put, select, takeLatest, take, all } from 'redux-saga/effects';
import selectors from '../../../../selectors';
import { INIT, SAVE } from './constants';
import {
  GET_CONFIGURATION_FAILURE,
  GET_CONFIGURATION_SUCCESS,
  PATCH_CONFIGURATION_FAILURE,
  PATCH_CONFIGURATION_SUCCESS,
  PATCH_PERSON_FAILURE,
  PATCH_PERSON_SUCCESS,
} from '../../../person/constants';
import { setError, setLoading, update } from './actions';
import { Configuration, Person } from '../../../person/types';
import {
  getConfiguration,
  watchUpdateCommunicationPreferences,
  watchUpdatePerson,
} from '../../../person/actions';

export function* init() {
  yield put(getConfiguration());
  const configRes = yield take([GET_CONFIGURATION_SUCCESS, GET_CONFIGURATION_FAILURE]);
  if (configRes.type === GET_CONFIGURATION_FAILURE) {
    throw new Error(configRes.payload.error);
  }
  const person = yield select(selectors.person.person);
  const configuration = yield select(selectors.person.configuration);
  const changes: Partial<Person> & {
    communicationPreferences?: Configuration['communicationPreferences'];
  } = {};
  changes.acceptElectronicCommunication = person?.acceptElectronicCommunication;
  changes.magazineCode = person?.magazineCode;
  changes.communicationPreferences = configuration?.communicationPreferences;
  yield put(update(changes));
}

export function* handleSave() {
  yield put(setLoading(true));
  const changes = yield select(selectors.ui.me.preferencesAuth0.changes);
  const { communicationPreferences, ...person } = changes;

  yield put(watchUpdatePerson(person));
  yield put(watchUpdateCommunicationPreferences({ ...communicationPreferences }));
  const { personResponse, configResponse } = yield all({
    personResponse: take([PATCH_PERSON_SUCCESS, PATCH_PERSON_FAILURE]),
    configResponse: take([PATCH_CONFIGURATION_SUCCESS, PATCH_CONFIGURATION_FAILURE]),
  });
  if (
    personResponse.type === PATCH_PERSON_SUCCESS &&
    configResponse.type === PATCH_CONFIGURATION_SUCCESS
  ) {
    yield put(setLoading(false));
  } else {
    yield put(setLoading(false));
    yield put(setError(personResponse.payload?.error || configResponse.payload?.error));
  }
}

export default function*() {
  yield takeLatest(INIT, init);
  yield takeLatest(SAVE, handleSave);
}
