import { SET_EDIT, SET_ERRORS, SAVE_PROFILE } from './constants';
import { Action, State } from './types/reducer.types';

export const initialState: State = {
  errors: {},
  edit: false,
  changes: {},
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload.errors,
      };
    case SET_EDIT:
      return { ...state, edit: action.payload.edit };
      
    case SAVE_PROFILE:
        return { ...state, changes: action.payload };

    default:
      return state;
  }
};

export default reducer;
