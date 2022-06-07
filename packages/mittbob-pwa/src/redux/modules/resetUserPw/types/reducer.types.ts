import {
  getPin,
  getPinFailure,
  getPinSuccess,
  postPassword,
  postPasswordFailure,
  postPasswordSuccess,
  watchGetPin,
  watchPostPassword,
} from '../actions';

export interface State {
  loading: boolean;
  isPostPasswordSuccess: boolean;
  mobileNumber?: string;
}

export type Action =
  | ReturnType<typeof getPin>
  | ReturnType<typeof getPinSuccess>
  | ReturnType<typeof getPinFailure>
  | ReturnType<typeof watchGetPin>
  | ReturnType<typeof postPassword>
  | ReturnType<typeof postPasswordSuccess>
  | ReturnType<typeof postPasswordFailure>
  | ReturnType<typeof watchPostPassword>;
