import { Reducer } from 'redux';
import { GET, GET_FAILURE, GET_SUCCESS } from './constants';
import { Action, State } from './types/reducer.types';

export const initialState: State = {
  flags: {},
  error: undefined,
  loading: false,
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return { ...state, loading: true };
    case GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case GET_SUCCESS:
      return {
        ...state,
        flags: action.payload.featureFlags.reduce((acc, curr) => ({ ...acc, [curr]: true }), {}),
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
