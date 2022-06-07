import * as actions from '../actions';
import { User } from './action.types';

export interface State {
  isAuthenticated: boolean;
  error?: string;
  loading: boolean;
  user?: User;
}

export type Action =
  | ReturnType<typeof actions['signIn']>
  | ReturnType<typeof actions['signInSuccess']>
  | ReturnType<typeof actions['signInFailure']>
  | ReturnType<typeof actions['watchSignIn']>
  | ReturnType<typeof actions['watchSignOut']>;