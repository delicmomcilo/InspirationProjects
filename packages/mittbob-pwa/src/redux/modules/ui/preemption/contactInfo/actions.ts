import { SET_ERRORS, SET_MOBILE, SET_NAME, TOGGLE_FORM, TOGGLE_TERMS_CHECKED, TOGGLE_COMMON_MEMBERSHIP_CHECKED } from './constants';
import { Errors } from './types/actions';

export const setName = (name: string) => ({ type: SET_NAME, payload: { name } } as const);
export const setMobile = (mobile: string) => ({ type: SET_MOBILE, payload: { mobile } } as const);
export const toggleForm = () => ({ type: TOGGLE_FORM } as const);
export const toggleTermsChecked = () => ({ type: TOGGLE_TERMS_CHECKED } as const);
export const toggleCommonMembershipChecked = () => ({ type: TOGGLE_COMMON_MEMBERSHIP_CHECKED } as const);
export const setErrors = (errors: Errors) => ({ type: SET_ERRORS, payload: { errors } } as const);
