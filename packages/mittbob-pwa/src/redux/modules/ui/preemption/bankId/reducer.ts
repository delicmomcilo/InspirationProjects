import { Action, State } from './types/reducer';
import { Reducer } from 'redux';
import { SET_ERROR, SET_SUCCESS } from './constants';
import { RESET } from '../shared/constants';

export const initialState: State = {};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action?.type) {
    case RESET: return initialState;
    case SET_ERROR:
      return { ...state, error: action.payload.error };
    case SET_SUCCESS: {
      return { ...state, response: action.payload.response };
    }
    default:
      return state;
  }
};

export default reducer;
