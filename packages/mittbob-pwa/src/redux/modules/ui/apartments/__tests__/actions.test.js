import * as actions from '../actions';
import * as constants from '../constants';

describe('modules/ui/apartments/actions', () => {
  it('setActiveFilters', () => {
    const filters = {
      buildingType: {
        leilighet: 'leilighet',
      },
    };
    expect(actions.setActiveFilters({ filters })).toEqual({
      type: constants.SET_ACTIVE_FILTERS,
      payload: { filters },
    });
  });

  it('setFilteredPreemptions', () => {
    const preemptions = ['p1', 'p2'];
    expect(actions.setFilteredPreemptions({ preemptions })).toEqual({
      type: constants.SET_FILTERED_PREEMPTIONS,
      payload: { preemptions },
    });
  });

  it('setActiveSorting', () => {
    const sorting = {
      field: 'totalPrice',
      order: constants.SORT_ORDER_ASC,
      selector: p => p.pricing.totalPrice,
    };
    expect(actions.setActiveSorting({ sorting })).toEqual({
      type: constants.SET_ACTIVE_SORTING,
      payload: { sorting },
    });
  });

  it('setSortedPreemptions', () => {
    const preemptions = ['p2', 'p1', 'p3'];
    expect(actions.setSortedPreemptions({ preemptions })).toEqual({
      type: constants.SET_SORTED_PREEMPTIONS,
      payload: { preemptions },
    });
  });
});
