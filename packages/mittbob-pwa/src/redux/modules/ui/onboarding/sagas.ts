import { put, select, takeLatest, take, all } from 'redux-saga/effects';
import selectors from '../../../selectors';
import { CLOSE, INIT, SAVE } from './constants';
import {
  GET_CONFIGURATION_FAILURE,
  GET_CONFIGURATION_SUCCESS,
  PATCH_CONFIGURATION_FAILURE,
  PATCH_CONFIGURATION_SUCCESS,
  PATCH_PERSON_FAILURE,
  PATCH_PERSON_SUCCESS,
} from '../../person/constants';
import { SIGN_IN_SUCCESS as SIGN_IN_SUCCESS_AUTH0 } from '../../auth0/constants';
import { setError, setLoading, show, updateAuth0, initFailure } from './actions';
import { Configuration } from '../../person/types';
import {
  getConfiguration,
  patchConfiguration,
  watchUpdateCommunicationPreferences,
  watchUpdatePerson,
} from '../../person/actions';
import { Changes } from './types/reducer.types';

const ONBOARD_VERSION = '1';

const isOnboarded = (config: Configuration): boolean => {
  if (typeof config?.infoPrompts?.onboarded === 'string') {
    const matches = config.infoPrompts.onboarded.match(/^Version:(.)_/) || [];
    return matches[1] === ONBOARD_VERSION;
  }
  return false;
};

export function* init(args: AnyAction) {
  try {
    yield put(getConfiguration());
    const configRes = yield take([GET_CONFIGURATION_SUCCESS, GET_CONFIGURATION_FAILURE]);
    if (configRes.type === GET_CONFIGURATION_FAILURE) {
      throw new Error(configRes.payload.error);
    }
    const person = yield select(selectors.person.person);
    const configuration = yield select(selectors.person.configuration);
    const changes: Changes = {};
    changes.acceptElectronicCommunication = person?.acceptElectronicCommunication;
    changes.magazineCode = person?.magazineCode;
    changes.communicationPreferences = configuration?.communicationPreferences;
    yield put(updateAuth0(changes));
  } catch (e) {
    yield put(initFailure(e.toString()));
  }
}

export function* handleConfigurationSuccess() {
  const nameId = yield select(selectors.auth0.nameId);
  const configuration = yield select(selectors.person.configuration);
  if (nameId && !isOnboarded(configuration)) {
    yield put(show(true));
  }
}

export function* handleClose() {
  yield put(
    patchConfiguration({
      op: 'add',
      path: '/infoPrompts/Onboarded',
      value: `Version:${ONBOARD_VERSION}_ISO:${new Date().toISOString()}`,
    }),
  );
}

export function* handleSave() {
  yield put(setLoading(true));
  const changes = yield select(selectors.ui.onboarding.changesAuth0);
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
    yield put(
      patchConfiguration({
        op: 'add',
        path: '/infoPrompts/Onboarded',
        value: `Version:${ONBOARD_VERSION}_ISO:${new Date().toISOString()}`,
      }),
    );
    yield put(setLoading(false));
    yield put(show(false));
  } else {
    yield put(setLoading(false));
    yield put(setError(personResponse.payload?.error || configResponse.payload?.error));
  }
}

export default function*() {
  yield takeLatest(INIT, init);
  yield takeLatest(GET_CONFIGURATION_SUCCESS, handleConfigurationSuccess);
  yield takeLatest(SAVE, handleSave);
  yield takeLatest(CLOSE, handleClose);
  yield takeLatest(SIGN_IN_SUCCESS_AUTH0, init);
}
