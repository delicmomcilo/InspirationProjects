import { Reducer } from 'redux';
import {
  GET,
  GET_FAILURE,
  GET_SUCCESS,
  GET_THIRD_PARTY_INFORMATION_FILE,
  GET_THIRD_PARTY_INFORMATION_FILE_FAILURE,
  GET_THIRD_PARTY_INFORMATION_FILE_SUCCESS,
} from './constants';
import { Action, State } from './types/reducer.types';

export const initialState: State = {
  allThirdPartyInformation: [],
  downloadUrl: '',
  error: undefined,
  loading: true,
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
        allThirdPartyInformation: [...action.payload.thirdPartyInformations],
        loading: false,
      };
    case GET_THIRD_PARTY_INFORMATION_FILE:
      return { ...state, loading: true };
    case GET_THIRD_PARTY_INFORMATION_FILE_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case GET_THIRD_PARTY_INFORMATION_FILE_SUCCESS:
      try {
        const thirdPartyInformationData = state.allThirdPartyInformation.find(
          x => x.id === action.payload.id,
        );
        if (thirdPartyInformationData) {
          thirdPartyInformationData.isRead = true;
        }
        return {
          ...state,
          loading: false,
        };
      } catch (e) {
        return { ...state, loading: false, error: 'Unable to download created blob url' };
      }
    default:
      return state;
  }
};

export default reducer;
