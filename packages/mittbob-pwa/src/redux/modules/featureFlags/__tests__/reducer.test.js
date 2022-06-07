import reducer, { initialState } from '../reducer';
import {
  get,
  getFailure,
  getSuccess,
} from '../actions';
import * as constants from '../constants';

describe('modules/featureFlags/reducer', () => {
  const error = new Error('Test error');
  const flags = ['flag1'];
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${constants.GET}`, () => {
    expect(reducer(initialState, get())).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it(`should handle ${constants.GET_FAILURE}`, () => {
    expect(reducer(initialState, getFailure({ error: error.toString() }))).toEqual({
      ...initialState,
      loading: false,
      error: error.toString(),
    });
  });



  it(`should handle ${constants.GET_SUCCESS}`, () => {
    expect(reducer(initialState, getSuccess(flags))).toEqual({
      ...initialState,
      loading: false,
      flags: {
        flag1: true
      }
    });
  });

});
