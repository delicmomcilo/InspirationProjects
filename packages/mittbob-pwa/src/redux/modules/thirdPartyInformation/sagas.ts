import { takeLatest, put, call, StrictEffect, Effect, select } from 'redux-saga/effects';
import { get, download } from 'src/redux/request';
import { WATCH_GET, WATCH_GET_THIRD_PARTY_INFORMATION_FILE } from './sagaConstants';
import {
  get as getThirdPartyInformationAction,
  getFailure,
  getSuccess,
  getThirdPartyInformationFile,
  getThirdPartyInformationFileFailure,
  getThirdPartyInformationFileSuccess,
} from './actions';
import { SuccessPayload } from './types/action.types';
import { RequestResponse } from '../../request/request.types';
import { api } from '../../../config';
import selectors from '../../selectors';

export const downloadFile = (blob: string): void => {
  const blobUrl = (window.URL ? URL : webkitURL).createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = blobUrl;
  a.download = 'ligningsoppgave.pdf';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(blobUrl);
};

export function* getThirdPartyInformationAsync(): Generator<StrictEffect> {
  try {
    const nameId = yield select(selectors.auth0.nameId);
    yield put(getThirdPartyInformationAction());
    const res = (yield call(get, {
      url: `${api.housingBaseUrl}/person/${nameId}/thirdpartyinformation`,
    })) as RequestResponse;
    if (res.response.ok) {
      yield put(getSuccess(res.json as SuccessPayload));
    } else {
      yield put(getFailure({ error: res.response.statusText }));
    }
  } catch (e) {
    yield put(getFailure({ error: (e && e.toString && e.toString()) || e }));
  }
}

export function* getThirdPartyInformationFileAsync({ payload }: AnyAction) {
  try {
    const nameId = yield select(selectors.auth0.nameId);
    yield put(getThirdPartyInformationFile());
    const res = (yield call(download, {
      url: `${api.housingBaseUrl}/person/${nameId}/thirdpartyinformation/${payload?.id}`,
    })) as RequestResponse;
    if (res.response.ok) {
      yield call(downloadFile, res.json);
      yield put(getThirdPartyInformationFileSuccess(payload?.id));
    } else {
      yield put(getThirdPartyInformationFileFailure({ error: res.response.statusText }));
    }
  } catch (e) {
    yield put(
      getThirdPartyInformationFileFailure({ error: (e && e.toString && e.toString()) || e }),
    );
  }
}

export default function*(): Generator<Effect> {
  yield takeLatest(WATCH_GET, getThirdPartyInformationAsync);
  yield takeLatest(WATCH_GET_THIRD_PARTY_INFORMATION_FILE, getThirdPartyInformationFileAsync);
}
