import reducer, { initialState } from '../reducer';
import {
  signIn,
  signInFailure,
  signInSuccess,
} from '../actions';
import * as constants from '../constants';

describe('modules/auth/reducer', () => {
  const error = new Error('Test error');
  const user = { name: 'Test' };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${constants.SIGN_IN}`, () => {
    expect(reducer(initialState, signIn())).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it(`should handle ${constants.SIGN_IN_FAILURE}`, () => {
    expect(reducer(initialState, signInFailure({ error: error.toString() }))).toEqual({
      ...initialState,
      loading: false,
      error: error.toString(),
    });
  });



  it(`should handle ${constants.SIGN_IN_SUCCESS}`, () => {
    expect(reducer(initialState, signInSuccess({ user, isAuthenticated: true }))).toEqual({
      ...initialState,
      loading: false,
      user,
      isAuthenticated: true,
    });
  });

});
