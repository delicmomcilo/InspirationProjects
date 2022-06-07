import { SIGN_IN, SIGN_IN_FAILURE, SIGN_IN_SUCCESS } from './constants';
import { WATCH_HANDLE_REDIRECT_CB, WATCH_SIGN_IN, WATCH_SIGN_OUT } from './sagaConstants';
import { Error, SignInSuccessPayload } from './types/action.types';

export const signIn = () => ({ type: SIGN_IN } as const);
export const signInFailure = ({ error }: Error) =>
  ({
    type: SIGN_IN_FAILURE,
    payload: { error },
  } as const);
export const signInSuccess = ({ isAuthenticated, user }: SignInSuccessPayload) =>
  ({
    type: SIGN_IN_SUCCESS,
    payload: { isAuthenticated, user },
  } as const);

export const watchSignIn = () =>
  ({
    type: WATCH_SIGN_IN,
  } as const);

export const watchHandleRedirectCallback = () =>
  ({
    type: WATCH_HANDLE_REDIRECT_CB,
  } as const);

export const watchSignOut = (returnTo?: string) =>
  ({
    type: WATCH_SIGN_OUT,
    payload: {
      returnTo,
    },
  } as const);
