import {
  signIn,
  signInFailure,
  signInSuccess,
  watchSignIn,
  watchHandleRedirectCallback,
} from '../actions';
import * as constants from '../constants';
import * as sagaConstants from '../sagaConstants';

describe('modules/auth/actions', () => {
  const error = new Error('Test error');
  const user = { name: 'user' };
  it('signIn', () => {
    expect(signIn()).toEqual({
      type: constants.SIGN_IN,
    });
  });
  it('signInFailure', () => {
    expect(signInFailure({ error: error.toString() })).toEqual({
      type: constants.SIGN_IN_FAILURE,
      payload: { error: error.toString() },
    });
  });
  it('signInSuccess', () => {
    expect(signInSuccess({ user, isAuthenticated: true })).toEqual({
      type: constants.SIGN_IN_SUCCESS,
      payload: { user, isAuthenticated: true },
    });
  });

  it('watchSignIn', () => {
    expect(watchSignIn()).toEqual({
      type: sagaConstants.WATCH_SIGN_IN,
    });
  });
  it('watchHandleRedirectCallback', () => {
    expect(watchHandleRedirectCallback()).toEqual({
      type: sagaConstants.WATCH_HANDLE_REDIRECT_CB,
    });
  });
});
