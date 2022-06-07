import reducer, { initialState } from '../reducer';
import * as actions from '../actions';
import { SORT_ORDER_ASC } from '../constants';

describe('modules/ui/apartments/reducer', () => {
  it('default', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('initialState', () => {
    const preemption = {
      unit: { primaryRoom: 2 },
      pricing: {
        totalPrice: 1,
        jointDebt: 3,
        jointCosts: 4,
      },
    };
    expect(initialState.possibleSortings.totalPrice(preemption)).toBe(1);
    expect(initialState.possibleSortings.primaryRoom(preemption)).toBe(2);
    expect(initialState.possibleSortings.jointDebt(preemption)).toBe(3);
    expect(initialState.possibleSortings.jointCosts(preemption)).toBe(4);
    expect(initialState.activeSorting.selector(preemption)).toBe(1);
  });

  it('toggleShowDetails', () => {
    expect(reducer(undefined, actions.toggleShowDetails({ id: 'p1' }))).toEqual({
      ...initialState,
      showDetailsId: 'p1',
    });
    expect(
      reducer({ ...initialState, showDetailsId: 'p1' }, actions.toggleShowDetails({ id: 'p1' })),
    ).toEqual({
      ...initialState,
      showDetailsId: undefined,
    });
  });

  it('setPossibleFilters', () => {
    const filters = {
      buildingType: ['Leilighet'],
    };
    expect(reducer(undefined, actions.setPossibleFilters({ filters }))).toEqual({
      ...initialState,
      possibleFilters: filters,
    });
  });

  it('setActiveFilters', () => {
    const filters = {
      buildingType: new Set(['Leilighet']),
    };
    expect(reducer(undefined, actions.setActiveFilters({ filters }))).toEqual({
      ...initialState,
      loading: true,
      activeFilters: filters,
    });
  });

  it('setFilteredPreemptions', () => {
    const preemptions = ['p1', 'p2'];
    expect(reducer(undefined, actions.setFilteredPreemptions({ preemptions }))).toEqual({
      ...initialState,
      loading: false,
      filteredPreemptionIds: preemptions,
    });
  });

  it('setActiveSorting', () => {
    const sorting = {
      field: 'totalPrice',
      order: SORT_ORDER_ASC,
      selector: p => p.pricing.totalPrice,
    };
    expect(reducer(undefined, actions.setActiveSorting({ sorting }))).toEqual({
      ...initialState,
      loading: true,
      activeSorting: sorting,
    });
  });

  it('setSortedPreemptions', () => {
    const preemptions = ['p2', 'p1', 'p3'];
    expect(reducer(undefined, actions.setSortedPreemptions({ preemptions }))).toEqual({
      ...initialState,
      loading: false,
      sortedPreemptionIds: preemptions,
    });
  });
});
