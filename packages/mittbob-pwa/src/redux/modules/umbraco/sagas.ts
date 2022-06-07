import { call, put, takeEvery } from 'redux-saga/effects';
import { WATCH_GET } from './sagaConstants';
import { get, getSuccess, getFailure } from './actions';
import { unauthorizedGet as getRequest } from '../../request';
import { umbraco } from '../../../config';
import { prependUmbracoUrlToRelativeUrlsInPlace } from './helpers';
import { Payload } from './types/sagas.types';

export function* getAsync({ payload }: Payload) {
  const { umbracoProperty, umbracoId, children = true } = payload || {};
  let url = `${umbraco.publishedContentUrl}/${umbracoId}`;
  if (children) url += '/children';
  try {
    yield put(get());
    const { json } = yield call(
      { context: getRequest, fn: getRequest },
      { url, headers: undefined, data: undefined, removeContentTypeJson: undefined },
    );
    yield call(prependUmbracoUrlToRelativeUrlsInPlace, json);
    yield put(getSuccess({ umbracoId, umbracoProperty, json }));
  } catch (error) {
    yield put(getFailure({ error: error.toString(), umbracoProperty, umbracoId }));
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function* watchGetAsync() {
  yield takeEvery(WATCH_GET, getAsync);
}
