import { Action, State } from './types/reducer';
import { Reducer } from 'redux';
import {
  SET_ERRORS,
  SET_MOBILE,
  SET_NAME,
  TOGGLE_COMMON_MEMBERSHIP_CHECKED,
  TOGGLE_FORM,
  TOGGLE_TERMS_CHECKED,
} from './constants';
import { RESET } from '../shared/constants';

export const initialState: State = {
  name: '',
  mobile: '',
  showExtraContactForm: false,
  errors: {},
  termsChecked: false,
  commonMembershipChecked: false
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action?.type) {
    case RESET: return initialState;
    case SET_NAME:
      return { ...state, name: action.payload.name };
    case SET_MOBILE:
      return { ...state, mobile: action.payload.mobile };
    case SET_ERRORS:
      return { ...state, errors: action.payload.errors };
    case TOGGLE_COMMON_MEMBERSHIP_CHECKED:
      return { ...state, commonMembershipChecked: !state.commonMembershipChecked };
    case TOGGLE_TERMS_CHECKED:
      return { ...state, termsChecked: !state.termsChecked };
    case TOGGLE_FORM:
      return { ...state, showExtraContactForm: !state.showExtraContactForm };
    default:
      return state;
  }
};

export default reducer;
