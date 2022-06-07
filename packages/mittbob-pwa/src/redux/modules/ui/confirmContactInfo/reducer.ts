import { Reducer } from 'redux';
import * as constants from './constants';
import { State, Action } from './types/reducer.types';

export const initialState: State = {
  show: false,
  loading: false,
  profileErrors: {},
  preferenceError: null,
  preferenceChanges: {},
  profileChanges: {}
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW:
      return {
        ...state,
        show: action.payload.show,
      };

    case constants.ABORT:
      return {
        ...state,
        show: false,
      };
 
    case constants.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case constants.UPDATE_PREFERENCES: {
      const preferenceChanges = {
        ...state.preferenceChanges,
        ...action.payload,
      };
      if (action.payload.communicationPreferences) {
        preferenceChanges.communicationPreferences = {
          ...(state.preferenceChanges.communicationPreferences || {}),
          ...action.payload.communicationPreferences,
        };
      }
      return {
        ...state,
        preferenceError: null,
        preferenceChanges,
      };
    }
    
    case constants.SET_PROFILE_ERRORS:
      return {
        ...state,
        profileErrors: action.payload.errors,
      };

    case constants.SET_PREFERENCE_ERROR: {
      let error = null;
      if (typeof action.payload.error === 'object') {
        error = action.payload.error.message ? action.payload.error.message : null;
      } else {
        error = action.payload.error ? action.payload.error : null;
      }
      return {
        ...state,
        preferenceError: error,
      };
    }

    case constants.INIT_FAILURE:
      return {
        ...state,
        preferenceError: action.payload.error,
      };

    default:
      return state;
  }
};

export default reducer;
