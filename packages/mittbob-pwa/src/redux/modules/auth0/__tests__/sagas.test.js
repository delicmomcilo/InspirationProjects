import { testSaga } from 'redux-saga-test-plan';
import { push } from 'connected-react-router';
import config from '../../../../config';
import { signIn, signInFailure, signInSuccess } from '../actions';
import { initialSignIn, handleRedirectCallback, handleSignIn, logout } from '../sagas';
import PATHS from '../../../../router/paths';
import { getPersonAsync } from '../../person/sagas';
import {
  checkSession,
  getUser,
  isAuthenticated as isAuthenticatedFn,
  handleRedirectCallback as handleRedirectCallbackFn,
  loginWithRedirect,
  logout as logoutFn
} from '../../../../clients/auth0';
describe('modules/auth0/sagas', () => {
  const error = new Error('I am an error');
  const mockUser = { name: 'test', nameId: 'sdf23223' };
  const mockAuth0 = {
    getTokenSilently: jest.fn(),
    isAuthenticated: jest.fn(),
    handleRedirectCallback: jest.fn(),
    loginWithRedirect: jest.fn(),
    getUser: jest.fn(),
    logout: jest.fn(),
  };

  it.each([{ success: true }, { success: false }])(
    'should handle initialSignIn %o',
    ({ success }) => {
      const saga = testSaga(initialSignIn)
        .next()
        .put(signIn())
        .next()
        .call(checkSession, {audience: config.auth0.audience})
        .next()
        .call(getUser)
        .next(mockUser)
        .call(isAuthenticatedFn);


      if (success)
        saga
          .next(true)
          .call(getPersonAsync, {type: 'AUTH0_INIT_SIGN_IN', payload: { id: mockUser.nameId}})
          .next()
          .put(signInSuccess({ user: mockUser, isAuthenticated: true }))
      else saga.throw(error).put(signInFailure({ error: error.toString() }));
      saga.next().isDone();
    },
  );
  it.each([{ success: true }, { success: false }])(
    'should handleRedirectCallback %o',
    ({ success }) => {
      const saga = testSaga(handleRedirectCallback)
        .next()
        .put(signIn())
        .next()
        .call(handleRedirectCallbackFn)
        .next()
        .call(checkSession, {audience: config.auth0.audience})
        .next()
        .call(getUser)
        .next(mockUser)
        .call(isAuthenticatedFn);

      if (success)
        saga
          .next(true)
          .call(getPersonAsync, {type: 'AUTH0_INIT_SIGN_IN', payload: { id: mockUser.nameId}})
          .next()
          .put(signInSuccess({ user: mockUser, isAuthenticated: true }))
          .next()
          .put(push(PATHS.HOME));
      else saga.throw(error).put(signInFailure({ error: error.toString() }));
      saga.next().isDone();
    },
  );

  it.each([{ success: true }, { success: false }])('should handleSignIn %o', ({ success }) => {
    const saga = testSaga(handleSignIn)
      .next()
      .put(signIn())
      .next()
      .call(loginWithRedirect);

    if (success) saga.next().isDone();
    else
      saga
        .throw(error)
        .put(signInFailure({ error: error.toString() }))
        .next()
        .isDone();
  });

  it('should logout %o', () => {
    testSaga(logout)
      .next()
      .call(logoutFn, { returnTo: window.location.origin })
      .next()
      .isDone();
  });

  /*
  it.each([{ success: true }, { success: false }])(
    'should handle get user %o',
    ({ success }) => {
      const saga = testSaga(getUserAsync)
        .next()
        .put(getUser())
        .next()
        .call(getUserFr);

      if (success)
        saga
          .next({ amUser, idmUser, tokens })
          .put(getUserSuccess({ amUser, idmUser, tokens }))
          .next()
          .call(syncRolesAsync);
      else saga.throw(error).put(getUserFailure({ error: error.toString() }));
      saga.next().isDone();
    },
  );
  it.each([{ success: true }, { success: false }])(
    'should handle sign out %o',
    ({ success }) => {
      const saga = testSaga(frSignOut)
        .next()
        .put(signOut())
        .next()
        .call(signOutFr);

      if (success)
        saga
          .next()
          .put(signOutSuccess())
          .next()
          .call(redirectLogout);
      else saga.throw(error).put(signOutFailure({ error: error.toString() }));
      saga.next().isDone();
    },
  );

  it.each([{ success: true }, { success: false }])(
    'should handle sign in %o',
    ({ success }) => {
      const saga = testSaga(frSignIn, args)
        .next(args)
        .put(signIn())
        .next()
        .call(signInFr, payload);

      if (success)
        saga
          .next({ amUser, idmUser, tokens })
          .put(signInSuccess({ amUser, idmUser, tokens }))
          .next()
          .call(syncRolesAsync);
      else saga.throw(error).put(signInFailure({ error: error.toString() }));
      saga.next().isDone();
    },
  ); */
});
