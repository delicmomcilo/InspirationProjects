import {
  get,
  getSuccess,
  getFailure,
  watchGet,
  getThirdPartyInformationFile,
  getThirdPartyInformationFileSuccess,
  getThirdPartyInformationFileFailure,
  watchGetThirdPartyInformationFile,
} from '../actions';
import {
  GET,
  GET_FAILURE,
  GET_SUCCESS,
  GET_THIRD_PARTY_INFORMATION_FILE,
  GET_THIRD_PARTY_INFORMATION_FILE_FAILURE,
  GET_THIRD_PARTY_INFORMATION_FILE_SUCCESS,
} from '../constants';
import { WATCH_GET, WATCH_GET_THIRD_PARTY_INFORMATION_FILE } from '../sagaConstants';

describe('modules/thirdpartyinformation/actions', () => {
  it('getThirdPartyInformation', () => {
    expect(get()).toEqual({
      type: GET,
    });
  });

  it('getThirdPartyInformationSuccess', () => {
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
      year: 2017,
      registered: "2016",
      unitId: "2",
      unitAddress: "address",
      availableForDownload: true,
      isRead: true,
      unitNo: 2
    }];

    expect(getSuccess(thirdpartyinformations)).toEqual({
      type: GET_SUCCESS,
      payload: { thirdPartyInformations: thirdpartyinformations},
    });
  });
  
  it('getThirdPartyInformationFailure', () => {
    const error = new Error('I am error');
    expect(getFailure({ error })).toEqual({
      type: GET_FAILURE,
      payload: { error },
    });
  });
  it('watchGetThirdPartyInformation', () => {
    expect(watchGet()).toEqual({
      type: WATCH_GET,
    });
  });

  it('getThirdPartyInformationFile', () => {
    expect(getThirdPartyInformationFile()).toEqual({
      type: GET_THIRD_PARTY_INFORMATION_FILE,
    });
  });
  it('getThirdPartyInformationFileSuccess', () => {
    const id = 1;
    expect(getThirdPartyInformationFileSuccess(id)).toEqual({
      type: GET_THIRD_PARTY_INFORMATION_FILE_SUCCESS,
      payload: { id },
    });
  });
  it('getThirdPartyInformationFileFailure', () => {
    const error = new Error('I am error');
    expect(getThirdPartyInformationFileFailure({ error })).toEqual({
      type: GET_THIRD_PARTY_INFORMATION_FILE_FAILURE,
      payload: { error },
    });
  });
  it('watchGetThirdPartyInformationFile', () => {
    const id = 1;
    expect(watchGetThirdPartyInformationFile(id)).toEqual({
      type: WATCH_GET_THIRD_PARTY_INFORMATION_FILE,
      payload: { id },
    });
  });
});
