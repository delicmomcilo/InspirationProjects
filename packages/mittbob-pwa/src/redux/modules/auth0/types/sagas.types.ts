import { watchSignIn, watchSignOut } from '../actions';

export type SignInAction = ReturnType<typeof watchSignIn>;
export type LogoutAction = ReturnType<typeof watchSignOut>;
