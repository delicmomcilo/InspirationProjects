import { Reducer } from 'redux';
import * as constants from './constants';
import { State, Action } from './types/reducer.types';

export const initialState: State = {
  show: false,
  loading: false,
  error: null,
  changesAuth0: {},
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW:
      return {
        ...state,
        show: action.payload.show,
      };

    case constants.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case constants.UPDATE_AUTH0: {
      const changesAuth0 = {
        ...state.changesAuth0,
        ...action.payload,
      };
      if (action.payload.communicationPreferences) {
        changesAuth0.communicationPreferences = {
          ...(state.changesAuth0.communicationPreferences || {}),
          ...action.payload.communicationPreferences,
        };
      }
      return {
        ...state,
        error: null,
        changesAuth0,
      };
    }

    case constants.SET_ERROR: {
      let error = null;
      if (typeof action.payload.error === 'object') {
        error = action.payload.error.message ? action.payload.error.message : null;
      } else {
        error = action.payload.error ? action.payload.error : null;
      }

      return {
        ...state,
        error,
      };
    }
    default:
      return state;
  }
};

export default reducer;
