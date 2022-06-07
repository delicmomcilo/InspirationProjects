import { Errors } from './actions';
import * as actions from '../actions';
import { reset } from '../../shared/actions';

export interface State {
  name: string;
  mobile: string;
  showExtraContactForm: boolean;
  errors: Errors;
  termsChecked: boolean;
  commonMembershipChecked: boolean;
}

export interface Payload {
  name?: string;
  mobile?: string;
  errors?: Errors;
}

export type Action =
  | ReturnType<typeof actions['setName']>
  | ReturnType<typeof actions['toggleForm']>
  | ReturnType<typeof actions['toggleTermsChecked']>
  | ReturnType<typeof actions['toggleCommonMembershipChecked']>
  | ReturnType<typeof actions['setErrors']>
  | ReturnType<typeof reset>
  | ReturnType<typeof actions['setMobile']>;
