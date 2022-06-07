import { GET, GET_FAILURE, GET_SUCCESS } from './constants';
import { Action, State } from './types/reducer.types';

export const initialState = {
  loading: false,
  errors: {},
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return { ...state, loading: true };
    case GET_SUCCESS:
      return { ...state, loading: false, [action.payload.umbracoProperty]: action.payload.json };
    case GET_FAILURE:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, [action.payload.umbracoProperty]: action.payload.error },
      };
    default:
      return state;
  }
};

export default reducer;
