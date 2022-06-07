import { call, put, select, takeEvery, takeLatest, all, StrictEffect } from 'redux-saga/effects';
import { api } from 'src/config';
import { get, post, upload, del } from 'src/redux/request';
import selectors from 'src/redux/selectors';
import * as constants from './constants';
import * as actions from './actions';
import * as types from './types/sagas.types';
import { RequestResponse, UploadPayload } from '../../request/request.types';
import { Preemption } from './types';

const toObject = <T extends { id: string }>(list: Array<T>, prop: keyof T = 'id') =>
  list.reduce((obj, item) => {
    const key = item[prop];
    if (typeof key !== 'string') return obj; // Do nothing
    return Object.assign(obj, { [key]: item });
  }, {} as Record<string, T>);

export function* getPreemptionsAsync() {
  try {
    const { json: list }: types.Preemptions = yield call(get, {
      url: `${api.preemptionBaseUrl}/preemption`,
    });
    yield put(actions.getPreemptionsSuccess({ preemptions: toObject(list) }));
  } catch (error) {
    yield put(actions.getPreemptionsFailure({ error }));
  }
}

export function* getPreemptionAsync({ payload }: AnyAction) {
  try {
    const { json: item, response }: types.Preemption & { response: any } = yield call(get, {
      url: `${api.preemptionBaseUrl}/preemption/${payload?.id}`,
    });
    if (response.ok) {
      yield put(actions.getPreemptionSuccess({ preemptions: { [item.id]: item } }));
    } else {
      yield put(actions.getPreemptionFailure({ error: (item as unknown) as AnyError }));
    }
  } catch (error) {
    yield put(actions.getPreemptionFailure({ error }));
  }
}

export function* getMyPreemptionsAsync() {
  try {
    const nameId = yield select(selectors.auth0.nameId);
    const { json: list }: types.Preemptions = yield call(get, {
      url: `${api.preemptionBaseUrl}/person/${nameId}/preemption`,
    });
    yield put(actions.getMyPreemptionsSuccess({ preemptions: toObject(list) }));
  } catch (error) {
    yield put(actions.getMyPreemptionsFailure({ error }));
  }
}

export function* getMyInterestsAsync() {
  try {
    const nameId = yield select(selectors.auth0.nameId);
    const { json: list }: types.Interests = yield call(get, {
      url: `${api.preemptionBaseUrl}/person/${nameId}/interest`,
    });
    yield put(
      actions.getMyInterestsSuccess({
        interests: toObject(list, 'preemptionId'),
      }),
    );
  } catch (error) {
    yield put(actions.getMyInterestsFailure({ error }));
  }
}

export function* postInterestAsync({ payload }: AnyAction): Generator<StrictEffect> {
  try {
    const { data: payloadData = {} } = payload;
    const { files, bankIdToken } = payloadData;
    const nameId = yield select(selectors.auth0.nameId);
    const preemption = (yield select(selectors.preemption.preemption(payload?.id))) as Preemption;

    const data = {
      InterestRequest: JSON.stringify({
        ClarificationType: preemption.clarificationType,
        NameId: nameId,
        Comment: '',
      }),
    } as UploadPayload;
    let headers;
    if (preemption.clarificationType === 'ManagedFixedPrice') {
      headers = { 'x-bankid-token': bankIdToken };
      data.files = [{ property: 'FinancingDocument', blob: files[0], name: files[0].name }];
    }

    const { json, response } = (yield call(upload, {
      url: `${api.preemptionBaseUrl}/preemption/${payload?.id}/interest`,
      data,
      headers,
    })) as RequestResponse;

    if (response.ok) {
      yield put(actions.postInterestSuccess({ id: payload.id, interests: json }));
    } else {
      yield put(actions.postInterestFailure({ error: (json as unknown) as AnyError }));
    }
  } catch (error) {
    yield put(actions.postInterestFailure({ error: error.toString ? error.toString() : error }));
  }
}

export function* deleteInterestAsync({ payload }: AnyAction) {
  try {
    const { json, response } = yield call(del, {
      url: `${api.preemptionBaseUrl}/preemption/${payload?.id}/interest/${payload?.interestId}`,
    });

    if (response.ok) {
      yield put(actions.deleteInterestSuccess(json.preemptionId));
    } else {
      yield put(
        actions.deleteInterestFailure({
          id: payload.id,
          error: `${response.status} -  ${response.statusText}`,
        }),
      );
    }
  } catch (error) {
    yield put(actions.deleteInterestFailure({ id: payload.id, error }));
  }
}

export function* getFiltersAsync() {
  try {
    const [{ json: buildingType }, { json: areas }]: types.Filters = yield all([
      call(get, { url: `${api.preemptionBaseUrl}/preemption/filter/buildingtype` }),
      call(get, { url: `${api.preemptionBaseUrl}/preemption/filter/areas` }),
    ]);

    yield put(
      actions.getFiltersSuccess({
        filters: {
          buildingType: buildingType.map(v => v.type),
          // TODO: Use areas as well as subareas when data is available
          subAreaName: areas[0].subAreas.map(v => v.areaName),
        },
      }),
    );
  } catch (error) {
    yield put(actions.getFiltersFailure({ error }));
  }
}

export default function*() {
  yield takeLatest(constants.GET_PREEMPTIONS, getPreemptionsAsync);
  yield takeEvery(constants.GET_PREEMPTION, getPreemptionAsync);
  yield takeLatest(constants.GET_MY_PREEMPTIONS, getMyPreemptionsAsync);
  yield takeLatest(constants.GET_MY_INTERESTS, getMyInterestsAsync);
  yield takeEvery(constants.POST_INTEREST, postInterestAsync);
  yield takeEvery(constants.DELETE_INTEREST, deleteInterestAsync);
  yield takeLatest(constants.GET_FILTERS, getFiltersAsync);
}
