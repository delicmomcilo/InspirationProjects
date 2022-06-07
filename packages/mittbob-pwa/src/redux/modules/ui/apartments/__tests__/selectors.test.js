import selectors from '../selectors';
import { initialState } from '../reducer';

const state = {
  ui: {
    apartments: {
      showDetailsId: 'p1',
      possibleFilters: 'possibleFilters',
      activeFilters: 'activeFilters',
      possibleSortings: 'possibleSortings',
      activeSorting: 'activeSorting',
      sortedPreemptionIds: 'sortedPreemptionIds',
      filteredPreemptionIds: 'filteredPreemptionIds',
    },
  },
};

const empty = {
  ui: {
    apartments: initialState,
  },
};

describe('modules/ui/apartments/selectors', () => {
  it('with state', () => {
    expect(selectors.showDetails('p1')(state)).toBe(true);
    expect(selectors.possibleFilters(state)).toBe('possibleFilters');
    expect(selectors.activeFilters(state)).toBe('activeFilters');
    expect(selectors.possibleSortings(state)).toBe('possibleSortings');
    expect(selectors.activeSorting(state)).toBe('activeSorting');
    expect(selectors.sortedPreemptionIds(state)).toBe('sortedPreemptionIds');
    expect(selectors.filteredPreemptionIds(state)).toBe('filteredPreemptionIds');
  });
  it('without state', () => {
    expect(selectors.showDetails('p1')(empty)).toBe(false);
    expect(selectors.possibleFilters(empty)).toBe(initialState.possibleFilters);
    expect(selectors.activeFilters(empty)).toBe(initialState.activeFilters);
    expect(selectors.possibleSortings(empty)).toBe(initialState.possibleSortings);
    expect(selectors.activeSorting(empty)).toBe(initialState.activeSorting);
    expect(selectors.sortedPreemptionIds(empty)).toBe(initialState.sortedPreemptionIds);
    expect(selectors.filteredPreemptionIds(empty)).toBe(initialState.filteredPreemptionIds);
  });
});
