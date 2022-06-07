import { PreemptionId } from 'src/redux/modules/preemption/types';
import * as actions from '../actions';
import * as types from '.';

export interface State {
  showSidebar: boolean
  showDetailsId?: PreemptionId;
  possibleSortings: types.PossibleSortings;
  activeSorting: types.ActiveSorting;
  possibleFilters: types.PossibleFilters;
  activeFilters: types.ActiveFilters;
  sortedPreemptionIds: Array<PreemptionId>;
  filteredPreemptionIds: Set<PreemptionId>;
}

export interface Payload {
  id?: PreemptionId;
  filters?: types.PossibleFilters | types.ActiveFilters;
  preemptions?: Array<PreemptionId> | Set<PreemptionId>;
  sorting?: types.ActiveSorting;
}

export type Action =
  | ReturnType<typeof actions['toggleShowDetails']>
  | ReturnType<typeof actions['toggleShowSidebar']>
  | ReturnType<typeof actions['setPossibleFilters']>
  | ReturnType<typeof actions['setActiveFilters']>
  | ReturnType<typeof actions['setFilteredPreemptions']>
  | ReturnType<typeof actions['setActiveSorting']>
  | ReturnType<typeof actions['setSortedPreemptions']>;
