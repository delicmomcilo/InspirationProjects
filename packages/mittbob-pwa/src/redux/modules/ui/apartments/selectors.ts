import { Selectors } from './types/selectors.types';

const selectors: Selectors = {
  showSidebar: state => state.ui.apartments.showSidebar,
  showDetails: id => state => state.ui.apartments.showDetailsId === id,
  possibleFilters: state => state.ui.apartments.possibleFilters,
  activeFilters: state => state.ui.apartments.activeFilters,
  possibleSortings: state => state.ui.apartments.possibleSortings,
  activeSorting: state => state.ui.apartments.activeSorting,
  sortedPreemptionIds: state => state.ui.apartments.sortedPreemptionIds,
  filteredPreemptionIds: state => state.ui.apartments.filteredPreemptionIds,
};

export default selectors;
