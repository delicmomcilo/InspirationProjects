import { RootState } from 'src/redux/rootState';
import { PreemptionId } from 'src/redux/modules/preemption/types';
import * as types from '.';

export interface Selectors {
  showSidebar: (state: RootState) => boolean;
  showDetails: (id: PreemptionId) => (state: RootState) => boolean;
  possibleFilters: (state: RootState) => types.PossibleFilters;
  activeFilters: (state: RootState) => types.ActiveFilters;
  possibleSortings: (state: RootState) => types.PossibleSortings;
  activeSorting: (state: RootState) => types.ActiveSorting;
  sortedPreemptionIds: (state: RootState) => Array<PreemptionId>;
  filteredPreemptionIds: (state: RootState) => Set<PreemptionId>;
}
