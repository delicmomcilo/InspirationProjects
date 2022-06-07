import {
  GET_PIN,
  GET_PIN_FAILURE,
  GET_PIN_SUCCESS,
  POST_PASSWORD_FAILURE,
  POST_PASSWORD,
  POST_PASSWORD_SUCCESS,
} from './constants';
import { Action, State } from './types/reducer.types';

export const initialState: State = {
  loading: false,
  isPostPasswordSuccess: false,
  mobileNumber: undefined,
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case GET_PIN:
      return { ...state, loading: true };
    case GET_PIN_SUCCESS:
      return { ...state, mobileNumber: action.payload.mobileNumber, loading: false };
    case GET_PIN_FAILURE:
      return { ...state, loading: false, error: action.payload?.error };
    case POST_PASSWORD:
      return { ...state, loading: true };
    case POST_PASSWORD_SUCCESS:
      return { ...state, isPostPasswordSuccess: true, loading: false };
    case POST_PASSWORD_FAILURE:
      return {
        ...state,
        isPostPasswordSuccess: false,
        loading: false,
        error: action.payload?.error,
      };
    default:
      return state;
  }
};

export default reducer;
