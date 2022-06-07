import reducer, { initialState } from '../reducer';
import * as actions from '../actions';
import * as constants from '../constants';

describe('modules/thirdpartyinformation/reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${constants.GET}`, () => {
    expect(reducer(initialState, actions.get())).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it(`should handle ${constants.GET_SUCCESS}`, () => {
    const thirdPartyInformations = [{
      id: 1,
      year: 2017,
      registered: "2016",
      unitId: "2",
      unitAddress: "address",
      availableForDownload: true,
      isRead: true,
      unitNo: 2
    }];
    expect(reducer(initialState, actions.getSuccess(thirdPartyInformations))).toEqual({
      ...initialState,
      allThirdPartyInformation: thirdPartyInformations,
      loading: false,
    });
  });

  it(`should handle ${constants.GET_FAILURE}`, () => {
    const error = "getFail";
    expect(reducer(initialState, actions.getFailure({error}))).toEqual({
      ...initialState,
      error,
      loading: false,
    });
  });

  it(`should handle ${constants.GET_THIRD_PARTY_INFORMATION_FILE}`, () => {
    expect(reducer(initialState, actions.getThirdPartyInformationFile())).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it(`should handle ${constants.GET_THIRD_PARTY_INFORMATION_FILE_SUCCESS}`, () => {
    const id = 1;
    const thirdPartyInformation = {
      id,
      year: 2017,
      registered: "2016",
      unitId: "2",
      unitAddress: "address",
      availableForDownload: true,
      isRead: false,
      unitNo: 2
    };
    const state = initialState;
    state.allThirdPartyInformation = [thirdPartyInformation];
    const thirdPartyInformations = [{
      ...thirdPartyInformation,
      isRead: true,
    }];
    expect(reducer(state, actions.getThirdPartyInformationFileSuccess(id))).toEqual({
      ...state,
      allThirdPartyInformation: thirdPartyInformations,
      loading: false,
    });
  });

  it(`should handle ${constants.GET_THIRD_PARTY_INFORMATION_FILE_FAILURE}`, () => {
    const error = "getFail";
    expect(reducer(initialState, actions.getThirdPartyInformationFileFailure({error}))).toEqual({
      ...initialState,
      loading: false,
      error,
    });
  });
});