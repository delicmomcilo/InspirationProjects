import * as constants from './constants';
import * as types from './types/actions.types';

export const toggleShowDetails = ({ id }: types.Id) =>
  ({
    type: constants.TOGGLE_SHOW_DETAILS,
    payload: { id },
  } as const);

export const toggleShowSidebar = () =>
  ({
    type: constants.TOGGLE_SHOW_SIDEBAR,
  } as const);

export const setPossibleFilters = ({ filters }: types.PossibleFitlers) =>
  ({
    type: constants.SET_POSSIBLE_FILTERS,
    payload: { filters },
  } as const);

export const setActiveFilters = ({ filters }: types.ActiveFilters) =>
  ({
    type: constants.SET_ACTIVE_FILTERS,
    payload: { filters },
  } as const);

export const setFilteredPreemptions = ({ preemptions }: types.FilteredPreemptions) =>
  ({
    type: constants.SET_FILTERED_PREEMPTIONS,
    payload: { preemptions },
  } as const);

export const setActiveSorting = ({ sorting }: types.ActiveSorting) =>
  ({
    type: constants.SET_ACTIVE_SORTING,
    payload: { sorting },
  } as const);

export const setSortedPreemptions = ({ preemptions }: types.SortedPreemptions) =>
  ({
    type: constants.SET_SORTED_PREEMPTIONS,
    payload: { preemptions },
  } as const);
