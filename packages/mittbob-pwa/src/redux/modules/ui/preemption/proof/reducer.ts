import { Reducer } from 'redux';
import { ADD_FILES, REMOVE_FILE, SET_ERRORS, SET_FILES } from './constants';
import { Action, State } from './types/reducer.types';
import { RESET } from '../shared/constants';

export const initialState = { files: [] };

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  const files = (state.files || []);
  switch (action.type) {
    case RESET: return initialState;
    case SET_FILES:
      return { ...state, files: action.payload.files};
    case ADD_FILES:
      return { ...state, files: files.concat(action.payload.files)};
    case REMOVE_FILE:
      return { ...state, files: files.filter(f => f.name !== action.payload.name) };
    case SET_ERRORS:
      return { ...state, errors: action.payload.errors };
    default:
      return state;
  }
};

export default reducer;
