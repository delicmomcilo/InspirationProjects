import { takeLatest, all, put, call, StrictEffect, Effect } from 'redux-saga/effects';
import { get } from 'src/redux/request';
import { WATCH_GET } from './sagaConstants';
import { get as getFeatureFlagsAction, getFailure, getSuccess } from './actions';
import { SuccessPayload } from './types/action.types';
import { RequestResponse } from '../../request/request.types';
import { featureFlagsFunctionUrl } from '../../../config/api';
import { SIGN_IN_SUCCESS as SIGN_IN_SUCCESS_AUTH0 } from '../auth0/constants';

export function* getFeatureFlagsAsync(): Generator<StrictEffect> {
  try {
    yield put(getFeatureFlagsAction());
    const res = (yield call(get, { url: featureFlagsFunctionUrl })) as RequestResponse;
    if (res.response.ok) {
      yield put(getSuccess(res.json as SuccessPayload));
    } else {
      yield put(getFailure({ error: res.response.statusText }));
    }
  } catch (e) {
    yield put(getFailure({ error: (e && e.toString && e.toString()) || e }));
  }
}

export default function*(): Generator<Effect> {
  yield all([yield takeLatest([WATCH_GET, SIGN_IN_SUCCESS_AUTH0], getFeatureFlagsAsync)]);
}
