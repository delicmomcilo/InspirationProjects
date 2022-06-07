import { call, put, takeLatest, select } from 'redux-saga/effects';
import { api } from 'src/config';
import { get, patch, post, put as reqPut } from 'src/redux/request';
import selectors from 'src/redux/selectors';
import * as constants from './constants';
import * as actions from './actions';
import * as types from './types/sagas.types';
import { WATCH_GET, WATCH_UPDATE, WATCH_UPDATE_COMMUNICATION_PREFERENCES } from './sagaConstants';
import { Person } from './types';

export function* getSeniorityAsync(args?: AnyAction) {
  try {
    // Supports auth0 only
    const id = args?.payload?.id;
    const { json: seniority }: types.Seniority = yield call(get, {
      url: `${api.personBaseUrl}/person/${id}/seniority`,
    });
    yield put(actions.getSenioritySuccess({ seniority }));
  } catch (error) {
    yield put(actions.getSeniorityFailure({ error }));
  }
}

export function* getPersonAsync(args?: AnyAction) {
  try {
    // Supports auth0 only
    const { id: argsId } = args?.payload || {};
    yield put(actions.getPerson());
    const auth0Id = yield select(selectors.auth0.nameId);
    const id = argsId || auth0Id;
    const { json: person } = yield call(get, {
      url: `${api.personBaseUrl}/person/${id}`,
    });
    if (person.memberNumber) {
      yield call(getSeniorityAsync, { type: 'AUTH0_GET_SENIORITY', payload: { id } });
    }
    yield put(actions.getPersonSuccess(person as Person));
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'getUser',
        eventType: 'auth0',
        userId: person.nameId,
      });
    } else {
      console.error('Could not find dataLayer on window for google tag manager.');
    }
  } catch (error) {
    yield put(actions.getPersonFailure({ error }));
  }
}

export function* patchPersonAsync(args: AnyAction) {
  const { payload } = args;
  const { email, mobile, magazineCode, acceptElectronicCommunication } = payload;
  try {
    // Supports auth0 only
    const operations = [];
    if (email) {
      operations.push({
        value: email,
        path: '/email',
        op: 'replace',
      });
    }

    if (acceptElectronicCommunication === 0 || acceptElectronicCommunication === 1) {
      operations.push({
        value: acceptElectronicCommunication,
        path: '/acceptElectronicCommunication',
        op: 'replace',
      });
    }
    if (magazineCode) {
      operations.push({
        value: magazineCode,
        path: '/magazineCode',
        op: 'replace',
      });
    }

    if (mobile) {
      operations.push({
        value: mobile,
        path: '/mobile',
        op: 'replace',
      });
    }
    yield put(actions.patchPerson());
    const id = yield select(selectors.auth0.nameId);
    const { json, response } = yield call(patch, {
      url: `${api.personBaseUrl}/person/${id}`,
      data: operations,
    });
    if (response.ok) {
      yield put(actions.patchPersonSuccess());
      yield call(getPersonAsync);
    } else {
      yield put(actions.patchPersonFailure({ error: json }));
    }
  } catch (error) {
    yield put(actions.patchPersonFailure({ error }));
  }
}

export function* getConfigurationAsync() {
  try {
    const nameId = yield select(selectors.auth0.nameId);
    const { json: configuration }: types.Configuration = yield call(get, {
      url: `${api.personBaseUrl}/person/${nameId}/userconfiguration`,
    });
    yield put(actions.getConfigurationSuccess({ configuration }));
  } catch (error) {
    yield put(actions.getConfigurationFailure({ error }));
  }
}

export function* putConfigurationAsync({ payload }: AnyAction) {
  try {
    const nameId = yield select(selectors.auth0.nameId);
    const { json: configuration }: types.Configuration = yield call(reqPut, {
      url: `${api.personBaseUrl}/person/${nameId}/userconfiguration`,
      data: payload?.configuration,
    });
    yield put(actions.putConfigurationSuccess({ configuration }));
  } catch (error) {
    yield put(actions.putConfigurationFailure({ error }));
  }
}

export function* updateCommunicationPreferencesAsync({ payload }: AnyAction) {
  try {
    const operations: Array<{ op: string; path: string; value: boolean }> = [];
    Object.keys(payload).forEach(k => {
      operations.push({
        value: payload[k],
        path: `communicationPreferences/${k}`,
        op: 'replace',
      } as const);
    });
    const nameId = yield select(selectors.auth0.nameId);
    const { json: configuration }: types.Configuration = yield call(patch, {
      url: `${api.personBaseUrl}/person/${nameId}/userconfiguration`,
      data: operations,
    });
    yield put(actions.patchConfigurationSuccess({ configuration }));
  } catch (error) {
    yield put(actions.patchConfigurationFailure({ error }));
  }
}

export function* patchConfigurationAsync({ payload }: AnyAction) {
  try {
    const nameId = yield select(selectors.auth0.nameId);
    const { json: configuration }: types.Configuration = yield call(patch, {
      url: `${api.personBaseUrl}/person/${nameId}/userconfiguration`,
      data: payload,
    });
    yield put(actions.patchConfigurationSuccess({ configuration }));
  } catch (error) {
    yield put(actions.patchConfigurationFailure({ error }));
  }
}

export default function* watchGetAsync() {
  yield takeLatest(constants.GET_SENIORITY, getSeniorityAsync);
  yield takeLatest(WATCH_GET, getPersonAsync);
  yield takeLatest(WATCH_UPDATE, patchPersonAsync);
  yield takeLatest(WATCH_UPDATE_COMMUNICATION_PREFERENCES, updateCommunicationPreferencesAsync);
  yield takeLatest(constants.GET_CONFIGURATION, getConfigurationAsync);
  yield takeLatest(constants.PUT_CONFIGURATION, putConfigurationAsync);
  yield takeLatest(constants.PATCH_CONFIGURATION, patchConfigurationAsync);
}
