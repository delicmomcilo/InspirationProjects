import { Reducer } from 'redux';
import { Action, State } from './types/reducer';
import { SET_ERRORS, TOGGLE_BINDING_CONTRACT_CHECKBOX, TOGGLE_RESET_SENIORITY_CHECKBOX } from './constants';
import { RESET } from '../shared/constants';

export const initialState: State = {
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action?.type) {
    case RESET: return initialState;

    case SET_ERRORS:
      return { ...state, errors: action.payload.errors };
    case TOGGLE_BINDING_CONTRACT_CHECKBOX:
      return { ...state, bindingContractChecked: !state.bindingContractChecked };
    case TOGGLE_RESET_SENIORITY_CHECKBOX:
      return { ...state, seniorityChecked: !state.seniorityChecked };
     default:
      return state;
  }
};

export default reducer;
