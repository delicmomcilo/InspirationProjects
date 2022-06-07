import { Errors, Files } from './actions.types';
import * as actions from '../actions';
import { reset } from '../../shared/actions';

export interface State {
  files?: Files;
  bankName?: string;
  contactName?: string;
  phone?: string;
  errors?: Errors
}

export interface Payload {
  name?: string;
  mobile?: string;
  errors?: Errors;
}

export type Action =
  | ReturnType<typeof actions['addFiles']>
  | ReturnType<typeof actions['removeFile']>
  | ReturnType<typeof actions['setFiles']>
  | ReturnType<typeof actions['setErrors']>
  | ReturnType<typeof reset>;
