import { Reducer } from 'redux';
import * as constants from './constants';
import { State, Action } from './types/reducer.types';

export const initialState: State = {
  show: false,
  loading: false,
  error: null,
  changes: {
  },
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case constants.UPDATE: {
      const changes = {
        ...state.changes,
        ...action.payload,
      };
      if (action.payload.communicationPreferences) {
        changes.communicationPreferences = {
          ...(state.changes.communicationPreferences || {}) ,
          ...action.payload.communicationPreferences,
        };
      }
      return {
        ...state,
        error: null,
        changes,
      };
    }

    case constants.SET_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default reducer;
