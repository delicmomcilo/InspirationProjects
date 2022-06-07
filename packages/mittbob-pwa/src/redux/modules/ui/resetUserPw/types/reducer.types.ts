import { errors, reset, setHasSpecialLandcode, setLandcode, setPin } from '../actions';
import { getPinSuccess, postPasswordSuccess } from '../../../resetUserPw/actions';
import { ValidationErrors } from './actions.types';

export interface State {
  stage: 1 | 2 | 3 | 4;
  hasSpecialLandcode: boolean;
  pin: string;
  password: string;
  landcode: string;
  errors: ValidationErrors;
}

export type Action =
  | ReturnType<typeof reset>
  | ReturnType<typeof errors>
  | ReturnType<typeof setPin>
  | ReturnType<typeof setHasSpecialLandcode>
  | ReturnType<typeof getPinSuccess>
  | ReturnType<typeof postPasswordSuccess>
  | ReturnType<typeof setLandcode>;
