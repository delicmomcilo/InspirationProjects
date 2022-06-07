import { put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import sharedSagas from './shared/sagas';

export default function*() {
  yield all([sharedSagas()]);
}
