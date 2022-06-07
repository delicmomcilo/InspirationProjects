import * as actions from '../actions';
import { Errors } from './actions';
import { reset } from '../../shared/actions';

export interface State {
  seniorityChecked?: boolean,
  errors?: Errors,
  bindingContractChecked?: boolean
}


export type Action =
  | ReturnType<typeof actions['toggleBindingCheckbox']>
  | ReturnType<typeof actions['setErrors']>
  | ReturnType<typeof reset>
  | ReturnType<typeof actions['toggleSeniorityCheckbox']>;
