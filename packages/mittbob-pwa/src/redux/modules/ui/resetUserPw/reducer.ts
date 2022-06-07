import { GET_PIN_SUCCESS, POST_PASSWORD_SUCCESS } from '../../resetUserPw/constants';
import {
  ERRORS,
  RESET,
  SET_HAS_SPECIAL_LANDCODES,
  SET_LANDCODE,
  SET_PIN_SUCCESS,
} from './constants';
import { Action, State } from './types/reducer.types';

export const initialState: State = {
  stage: 1,
  hasSpecialLandcode: false,
  pin: '',
  password: '',
  landcode: '+47',
  errors: {},
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return initialState;
    case ERRORS:
      return { ...state, errors: action.payload.errors };
    case GET_PIN_SUCCESS:
      return { ...state, stage: 2 };
    case SET_PIN_SUCCESS:
      return { ...state, pin: action.payload.pin, stage: 3 };
    case SET_LANDCODE:
      return { ...state, landcode: action.payload.landcode };
    case SET_HAS_SPECIAL_LANDCODES:
      return { ...state, hasSpecialLandcode: action.payload.hasSpecialLandcode };
    case POST_PASSWORD_SUCCESS:
      return { ...state, stage: 4, password: action.payload.password };

    default:
      return state;
  }
};

export default reducer;
