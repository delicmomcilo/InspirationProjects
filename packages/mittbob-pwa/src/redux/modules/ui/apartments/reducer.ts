import * as constants from './constants';
import { State, Action } from './types/reducer.types';

export const initialState: State = {
  showSidebar: false,
  possibleSortings: {
    totalPrice: p => p.pricing.totalPrice,
    primaryRoom: p => p.unit.primaryRoom,
    jointDebt: p => p.pricing.jointDebt,
    jointCosts: p => p.pricing.jointCosts,
  },
  activeSorting: {
    field: 'totalPrice',
    order: constants.SORT_ORDER_ASC,
    selector: p => p.pricing.totalPrice,
  },
  possibleFilters: {
    preemptionType: ['Fastpris', 'Forhåndsavklaring'],
    buildingType: [],
    subAreaName: [],
  },
  activeFilters: {
    preemptionType: new Set(),
    buildingType: new Set(),
    subAreaName: new Set(),
  },
  sortedPreemptionIds: [],
  filteredPreemptionIds: new Set(),
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {

    case constants.TOGGLE_SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    case constants.TOGGLE_SHOW_DETAILS:
      return {
        ...state,
        showDetailsId: state.showDetailsId === action.payload.id ? undefined : action.payload.id,
      };
    case constants.SET_POSSIBLE_FILTERS:
      return { ...state, possibleFilters: action.payload.filters };
    case constants.SET_ACTIVE_FILTERS:
      return { ...state, loading: true, activeFilters: action.payload.filters };
    case constants.SET_FILTERED_PREEMPTIONS:
      return { ...state, loading: false, filteredPreemptionIds: action.payload.preemptions };
    case constants.SET_ACTIVE_SORTING:
      return { ...state, loading: true, activeSorting: action.payload.sorting };
    case constants.SET_SORTED_PREEMPTIONS:
      return { ...state, loading: false, sortedPreemptionIds: action.payload.preemptions };
    default:
      return state;
  }
};

export default reducer;
