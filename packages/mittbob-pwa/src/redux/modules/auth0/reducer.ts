import { Reducer } from 'redux';
import {
  SIGN_IN,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
} from './constants';
import { Action, State } from './types/reducer.types';

export const initialState: State = {
  isAuthenticated: false,
  error: undefined,
  loading: false,
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:       return { ...state, loading: true };
    case SIGN_IN_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
