import reducer, { initialState } from '../reducer';
import { show, initFailure, abort } from '../actions';

describe('modules/ui/confirmcontactinfo/reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle show`, () => {
    const showVar = true;
    expect(reducer(initialState, show(showVar))).toEqual({
      ...initialState,
      show: showVar,
    });
  });

  it(`should handle edit profile`, () => {
    const error = "some error";
    expect(reducer(initialState, initFailure(error))).toEqual({
      ...initialState,
      preferenceError: error
    });
  });

  it(`should handle abort`, () => {
    expect(reducer(initialState, abort())).toEqual({
      ...initialState,
      show: false,
    });
  });
});