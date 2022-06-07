import { SET_ERRORS, TOGGLE_BINDING_CONTRACT_CHECKBOX, TOGGLE_RESET_SENIORITY_CHECKBOX } from './constants';
import { Errors } from './types/actions';

export const toggleBindingCheckbox = () => ({ type: TOGGLE_BINDING_CONTRACT_CHECKBOX } as const);
export const toggleSeniorityCheckbox = () => ({ type: TOGGLE_RESET_SENIORITY_CHECKBOX } as const);
export const setErrors = (errors: Errors) => ({ type: SET_ERRORS, payload: { errors } } as const);
