import * as constants from './constants';
import { State, Action } from './types/reducer.types';

export const initialState: State = {
  loadingPostInterest: false,
  loadingAllPreemptions: false,
  loadingPreemption: false,
  loadingMyPreemptions: false,
  loadingMyInterests: false,
  loadingDeleteInterest: {},
  allPreemptions: {},
  myPreemptions: {},
  myInterests: {},
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_PREEMPTIONS:
      return { ...state, loadingAllPreemptions: true };

    case constants.GET_PREEMPTION:
      return { ...state, loadingPreemption: true };

    case constants.GET_MY_PREEMPTIONS:
      return { ...state, loadingMyPreemptions: true };

    case constants.GET_MY_INTERESTS:
      return { ...state, loadingMyInterests: true };

    case constants.POST_INTEREST:
      return { ...state, loadingPostInterest: true };
    case constants.POST_INTEREST_SUCCESS:
      return { ...state, loadingPostInterest: false };
    case constants.POST_INTEREST_FAILURE:
      return { ...state, loadingPostInterest: false };

    case constants.DELETE_INTEREST:
      return {
        ...state,
        loadingDeleteInterest: { ...state.loadingDeleteInterest, [action.payload.id]: true },
      };
    case constants.DELETE_INTEREST_SUCCESS:
      return {
        ...state,
        loadingDeleteInterest: { ...state.loadingDeleteInterest, [action.payload.id]: false },
        myInterests: {
          ...state.myInterests,
          [action.payload.id]: {
            ...state.myInterests[action.payload.id],
            active: false,
          },
        },
      };
    case constants.DELETE_INTEREST_FAILURE:
      return {
        ...state,
        loadingDeleteInterest: { ...state.loadingDeleteInterest, [action.payload.id]: true },
      };

    case constants.GET_PREEMPTIONS_SUCCESS:
      return {
        ...state,
        loadingAllPreemptions: false,
        getPreemptionsError: undefined,
        allPreemptions: { ...state.allPreemptions, ...action.payload.preemptions },
      };
    case constants.GET_PREEMPTION_SUCCESS:
      return {
        ...state,
        loadingPreemption: false,
        getPreemptionError: undefined,
        allPreemptions: { ...state.allPreemptions, ...action.payload.preemptions },
      };
    case constants.GET_MY_PREEMPTIONS_SUCCESS:
      return {
        ...state,
        loadingMyPreemptions: false,
        getMyPreemptionsError: undefined,
        allPreemptions: { ...state.allPreemptions, ...action.payload.preemptions },
        myPreemptions: action.payload.preemptions,
      };
    case constants.GET_MY_INTERESTS_SUCCESS:
      return {
        ...state,
        loadingMyInterests: false,
        getMyInterestsError: undefined,
        myInterests: action.payload.interests,
      };

    case constants.GET_PREEMPTIONS_FAILURE:
      return { ...state, loadingAllPreemptions: false, getPreemptionsError: action.payload.error };
    case constants.GET_PREEMPTION_FAILURE:
      return { ...state, loadingPreemption: false, getPreemptionError: action.payload.error };
    case constants.GET_MY_PREEMPTIONS_FAILURE:
      return { ...state, loadingMyPreemptions: false, getMyPreemptionsError: action.payload.error };
    case constants.GET_MY_INTERESTS_FAILURE:
      return { ...state, loadingMyInterests: false, getMyInterestsError: action.payload.error };
    default:
      return state;
  }
};

export default reducer;
