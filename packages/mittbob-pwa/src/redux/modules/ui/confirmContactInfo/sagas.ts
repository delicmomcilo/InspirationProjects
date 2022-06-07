import { put, select, takeLatest, take, all } from 'redux-saga/effects';
import selectors from '../../../selectors';
import { 
  PATCH_PERSON_SUCCESS,
  PATCH_PERSON_FAILURE,
  PATCH_CONFIGURATION_SUCCESS,
  PATCH_CONFIGURATION_FAILURE,
  GET_CONFIGURATION_SUCCESS,
  GET_CONFIGURATION_FAILURE
 } from '../../person/constants';
import { SIGN_IN_SUCCESS as SIGN_IN_SUCCESS_AUTH0 } from '../../auth0/constants';
import { show, initFailure, updatePreferences, setLoading, setPreferenceError } from './actions';
import { Configuration, Person } from '../../person/types';
import {
  getConfiguration,
  patchConfiguration, watchUpdateCommunicationPreferences, watchUpdatePerson,
} from '../../person/actions';
import appConfig from '../../../../config/appConfig';
import { SAVE, ABORT } from './constants';
import { Changes } from './types/reducer.types';

export const CONTACT_INFO_VERSION = '1';

const logConfirmContactInfoGoogleTag = (email: string | undefined, mobile: string | undefined, person: Partial<Person>) => {
  if (window.dataLayer) {
    if(email !== person?.email && mobile !== person?.mobile){
      window.dataLayer.push({
        'event': 'email_and_mobile_updated',
        'eventType': 'confirmContactInfo',
        'userId': person.nameId
      });
    }
    else if(email !== person?.email){
      window.dataLayer.push({
        'event': 'email_updated',
        'eventType': 'confirmContactInfo',
        'userId': person.nameId
      });
    }
    else if(mobile !== person?.mobile){
      window.dataLayer.push({
        'event': 'mobile_updated',
        'eventType': 'confirmContactInfo',
        'userId': person.nameId
      });
    }
    else {
      window.dataLayer.push({
        'event': 'no_change',
        'eventType': 'confirmContactInfo',
        'userId': person.nameId
      });
    }
  } else {
    console.error('Could not find dataLayer on window for google tag manager.')
  }
};

const isContactInfoUpdated = (config: Configuration): boolean => {
  if (typeof config?.infoPrompts?.confirmContactInfo === 'string') {
    const versionMatch = config.infoPrompts.confirmContactInfo.match(/^Version:(.)_/) || [];
    const dateMatch = config.infoPrompts.confirmContactInfo.match(/_ISO:(.*)$/) || [];

    const lastUpdated = new Date(dateMatch[1]);
    const dateLimit = new Date();
    dateLimit.setDate(dateLimit.getDate() - appConfig.CONTACT_INFO_OUTDATED_DAYS);

    return versionMatch[1] === CONTACT_INFO_VERSION && lastUpdated > dateLimit;
  }
  return false;
};

export function* init() {
  try {
    yield put(getConfiguration());
    const configRes = yield take([GET_CONFIGURATION_SUCCESS, GET_CONFIGURATION_FAILURE]);
    if (configRes.type === GET_CONFIGURATION_FAILURE) {
      throw new Error(configRes.payload.error);
    }
    const { acceptElectronicCommunication, magazineCode }: Partial<Person>  = yield select(selectors.person.person);
    const { communicationPreferences } = yield select(selectors.person.configuration);
    const changes: Changes = { acceptElectronicCommunication, magazineCode, communicationPreferences };

    yield put(updatePreferences(changes));
  }
  catch (e) {
    yield put(initFailure(e.toString()));
  }
}

export function* handleConfigurationSuccess() {
  const nameId = yield select(selectors.auth0.nameId);
  const configuration = yield select(selectors.person.configuration);
  if (nameId && !isContactInfoUpdated(configuration)) {
    yield put(show(true));
  }
}

export function* handleSave(args: AnyAction) {
  yield put(setLoading(true));
  const { email, mobile }: Partial<Person>  = args?.payload; 
  const { acceptElectronicCommunication, magazineCode, communicationPreferences}: Changes = yield select(selectors.ui.confirmContactInfo.preferenceChanges);
  yield put(watchUpdatePerson({ email, mobile, acceptElectronicCommunication, magazineCode }));
  
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
        path: '/infoPrompts/ConfirmContactInfo',
        value: `Version:${CONTACT_INFO_VERSION}_ISO:${new Date().toISOString()}`,
      }),
    );

    const person: Person = yield select(selectors.person.person);
    logConfirmContactInfoGoogleTag(email, mobile, person);

    yield put(setLoading(false));
    yield put(show(false));
  } else {
    yield put(setLoading(false));
    yield put(setPreferenceError(personResponse.payload?.error || configResponse.payload?.error));
  }
}

export function* handleAbort() {
  const nameId = yield select(selectors.auth0.nameId);
  if (window.dataLayer) {
    window.dataLayer.push({
      'event': 'aborted',
      'eventType': 'confirmContactInfo',
      'userId': nameId
    });
  } else {
    console.error('Could not find dataLayer on window for google tag manager.')
  }
}

export default function*() {
  yield takeLatest(GET_CONFIGURATION_SUCCESS, handleConfigurationSuccess);
  yield takeLatest(SAVE, handleSave);
  yield takeLatest(SIGN_IN_SUCCESS_AUTH0, init);
  yield takeLatest(ABORT, handleAbort);
}
