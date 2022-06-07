import * as constants from './constants';
import { State, Action } from './types/reducer.types';

export const initialState: State = {
  loading: false,
  seniority: {},
  configuration: {},
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET:
      return { ...state, loading: true };
    case constants.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        person: action.payload.person,
      };
    case constants.GET_FAILURE:
      return { ...state, loading: false, personError: action.payload.error };
    case constants.PATCH_PERSON:
      return { ...state, loading: true };
    case constants.PATCH_PERSON_SUCCESS:
      return {
        ...state,
        loading: false,
        // person: action.payload.person,
      };
    case constants.PATCH_PERSON_FAILURE:
      return { ...state, loading: false, personError: action.payload.error };
    case constants.GET_SENIORITY:
      return { ...state, loading: true };
    case constants.GET_SENIORITY_SUCCESS:
      return {
        ...state,
        loading: false,
        seniorityError: undefined,
        seniority: action.payload.seniority,
      };
    case constants.GET_SENIORITY_FAILURE:
      return { ...state, loading: false, seniorityError: action.payload.error };
    case constants.GET_CONFIGURATION:
    case constants.PUT_CONFIGURATION:
    case constants.PATCH_CONFIGURATION:
      return { ...state, loading: true };
    case constants.GET_CONFIGURATION_SUCCESS:
    case constants.PUT_CONFIGURATION_SUCCESS:
    case constants.PATCH_CONFIGURATION_SUCCESS:
      return {
        ...state,
        loading: false,
        configurationError: undefined,
        configuration: action.payload.configuration,
      };
    case constants.GET_CONFIGURATION_FAILURE:
    case constants.PUT_CONFIGURATION_FAILURE:
    case constants.PATCH_CONFIGURATION_FAILURE:
      return { ...state, loading: false, configurationError: action.payload.error };
    default:
      return state;
  }
};

export default reducer;
