import { testSaga } from 'redux-saga-test-plan';
import * as sagas from '../sagas';
import * as actions from '../actions';
import { api } from '../../../../config';
import { get, download } from '../../../request';
import selectors from '../../../selectors';

describe('modules/thirdpartyinformation/sagas', () => {
  describe('get', () => {
    const error = new Error('getThirdPartyInformationError');
    const nameId = '1234';
    const thirdpartyinformations = [
      {
        id: 1,
        year: 2017,
        registered: "2016",
        unitId: "2",
        unitAddress: "address",
        availableForDownload: true,
        isRead: true,
        unitNo: 2
      },
      {
        id: 1,
        year: 2018,
        registered: "2017",
        unitId: "3",
        unitAddress: "address",
        availableForDownload: true,
        isRead: true,
        unitNo: 3
      }
    ];    

    it.each([true, false])('%o', success => {
      const saga = testSaga(sagas.getThirdPartyInformationAsync)
        .next()
        .select(selectors.auth0.nameId)
        .next(nameId)
        .put(actions.get())
        .next()
        .call(get, { url: `${api.housingBaseUrl}/person/${nameId}/thirdpartyinformation` })
        .next({ json: thirdpartyinformations, response: { ok: success } });

      if (success) saga.put(actions.getSuccess(thirdpartyinformations));
      else saga.throw(error).put(actions.getFailure({error: error.toString()}));

      saga.next().isDone();
    });
  });

  describe('getThirdPartyInformationFile', () => {
    const error = new Error('getThirdPartyInformationError');
    const nameId = '1234';
    const payload = {id: 1};
    const file = "file";
    const status = "status";
    const args = { payload };

    it.each([true, false])('%o', success => {
      const saga = testSaga(sagas.getThirdPartyInformationFileAsync, args)
        .next()
        .select(selectors.auth0.nameId)
        .next(nameId)
        .put(actions.getThirdPartyInformationFile())
        .next()
        .call(download, { url: `${api.housingBaseUrl}/person/${nameId}/thirdpartyinformation/${payload.id}` })
        .next({ json: file, response: { ok: success, statusText: status } });

      if (success) {
        saga.call(sagas.downloadFile, file)
        .next()
        .put(actions.getThirdPartyInformationFileSuccess(payload.id, file));
      }
      else saga.throw(error).put(actions.getThirdPartyInformationFileFailure({error: error.toString()}));

      saga.next().isDone();
    });
  });
});
