import { all, put, takeLatest, call, StrictEffect, Effect } from 'redux-saga/effects';
import { unauthorizedGet, unauthorizedPost, createQuery } from 'src/redux/request';
import { WATCH_GET_PIN, WATCH_POST_PASSWORD } from './sagaConstants';
import {
  getPin,
  getPinSuccess,
  getPinFailure,
  postPassword,
  postPasswordFailure,
  postPasswordSuccess,
} from './actions';
import { api } from '../../../config';
import { getRecaptchaToken } from '../../../helpers';
import { GetPinAsyncPayload, PinResponse, PostPasswordAsyncPayload } from './types/sagas.types';

// const url =
//   'https://bob-d-weu-nodefunctions1-fna.azurewebsites.net/api/reset-user-pw';

export function* getPinAsync(args: GetPinAsyncPayload): Generator<StrictEffect> {
  const { payload } = args;
  const { number, dateOfBirth } = payload;
  try {
    yield put(getPin());

    const recaptchaToken = yield call(getRecaptchaToken);

    const { response } = (yield call(unauthorizedGet, {
      url: `${api.resetUserPw}${createQuery({
        number,
        dateOfBirth,
        recaptchaToken,
      })}`,
    })) as PinResponse;

    if (response.ok) {
      yield put(getPinSuccess(number));
    } else {
      yield put(getPinFailure({ error: response.statusText }));
    }
  } catch (error) {
    yield put(getPinFailure({ error }));
  }
}

export function* postPasswordAsync(args: PostPasswordAsyncPayload): Generator<StrictEffect> {
  const { payload } = args;
  const { pin, password } = payload;
  try {
    yield put(postPassword());
    const { response } = (yield call(unauthorizedPost, {
      url: api.resetUserPw,
      data: { pin, password },
    })) as PinResponse;
    if (response.ok) {
      yield put(postPasswordSuccess(password));
    } else {
      yield put(postPasswordFailure({ error: response.statusText }));
    }
  } catch (error) {
    yield put(postPasswordFailure({ error }));
  }
}

export default function*(): Generator<Effect> {
  yield all([
    yield takeLatest(WATCH_GET_PIN, getPinAsync),
    yield takeLatest(WATCH_POST_PASSWORD, postPasswordAsync),
  ]);
}
