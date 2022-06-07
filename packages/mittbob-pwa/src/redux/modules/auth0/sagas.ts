import { takeLatest, all, put, call, StrictEffect, Effect } from 'redux-saga/effects';
import { push } from 'connected-react-router';
// import { get } from 'src/redux/request';
import { WATCH_HANDLE_REDIRECT_CB, WATCH_SIGN_IN, WATCH_SIGN_OUT } from './sagaConstants';
import { signIn, signInFailure, signInSuccess } from './actions';
import { LogoutAction, SignInAction } from './types/sagas.types';
import config from '../../../config';
import PATHS from '../../../router/paths';
import { User } from './types/action.types';
import { getPersonAsync } from '../person/sagas';
import {
  checkSession,
  getUser,
  isAuthenticated as isAuthenticatedFn,
  handleRedirectCallback as handleRedirectCallbackFn,
  loginWithRedirect,
  logout as logoutFn
} from '../../../clients/auth0';

export function* initialSignIn(): Generator<StrictEffect> {
    const isAuthenticated = (yield call(isAuthenticatedFn)) as boolean;
    if( isAuthenticated) yield call(logoutFn);

  // try {
  //   // getTokenSilently falls back to iframe if there is no cache present. Resulting in an extra, but
  //   // successful token call. However the fallback will never work on Safari because of security
  //   // restrictions. Small workaround here to just return if we are on the callback/redirect url
  //   // becuause we want to process the url with callback, and not getTokenSilentlyIframe fallback.
  //   if (window.location.pathname === PATHS.CALLBACK_AUTH0) return;
  //   yield put(signIn());
  //   yield call(checkSession, { audience: config.auth0.audience });
  //   const user = (yield call(getUser)) as User;
  //   const isAuthenticated = (yield call(isAuthenticatedFn)) as boolean;
  //   // const flags = yield call(get, {url: 'http://bob-d-weu-functions1-fna.azurewebsites.net/api/FeatureFlagsFunction'});
  //   // console.log('FLAGS', flags);
  //   yield call(getPersonAsync, { type: 'AUTH0_INIT_SIGN_IN', payload: { id: user.nameId } });
  //   yield put(signInSuccess({ user, isAuthenticated }));
  //   if (window.dataLayer) {
  //     window.dataLayer.push({
  //       'event': 'silent_login',
  //       'eventType': 'auth0',
  //       'userId': user.nameId
  //     });
  //   } else {
  //     console.error('Could not find dataLayer on window for google tag manager.')
  //   }
  // } catch (e) {
  //   yield put(signInFailure({ error: (e && e.toString && e.toString()) || e }));
  // }
}

export function* handleRedirectCallback(): Generator<StrictEffect> {
  try {
    yield put(signIn());
    yield call(handleRedirectCallbackFn);
    yield call(checkSession, { audience: config.auth0.audience });
    const user = (yield call(getUser)) as User;
    const isAuthenticated = (yield call(isAuthenticatedFn)) as boolean;
    // const flags = yield call(get, {url: 'http://bob-d-weu-functions1-fna.azurewebsites.net/api/FeatureFlagsFunction'})
    // console.log('FLAGS', flags);
    yield call(getPersonAsync, { type: 'AUTH0_INIT_SIGN_IN', payload: { id: user.nameId } });
    yield put(signInSuccess({ user, isAuthenticated }));
    yield put(push(PATHS.HOME));
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'login',
        'eventType': 'auth0',
        'userId': user.nameId
      });
    } else {
      console.error('Could not find dataLayer on window for google tag manager.')
    }
  } catch (e) {
    yield put(signInFailure({ error: (e && e.toString && e.toString()) || e }));
  }
}

export function* handleSignIn(args: SignInAction): Generator<StrictEffect> {
  try {
    yield put(signIn());
    yield call(loginWithRedirect);
  } catch (e) {
    yield put(signInFailure({ error: (e && e.toString && e.toString()) || e }));
  }
}

export function* logout(args: LogoutAction): Generator<StrictEffect> {
    yield call(logoutFn, { returnTo: args?.payload?.returnTo || window.location.origin });
}

export default function*(): Generator<Effect> {
  yield all([
    yield takeLatest(WATCH_SIGN_IN, handleSignIn),
    yield takeLatest(WATCH_SIGN_OUT, logout),
    yield takeLatest(WATCH_HANDLE_REDIRECT_CB, handleRedirectCallback),
  ]);
}
