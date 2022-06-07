import reducer, { initialState } from '../reducer';
import { SET_CATEGORIES, SET_FILTER } from '../constants';
import { setCategories, setFilter } from '../actions';

describe('modules/ui/benefits/reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${SET_CATEGORIES}`, () => {
    const categories = {
      Familie: {
        name: 'Familie',
        checked: true,
        count: 3,
      },
    };
    expect(reducer(initialState, setCategories(categories))).toEqual({
      ...initialState,
      categories,
    });
  });

  it(`should handle ${SET_FILTER}`, () => {
    const filter = 'Familie';
    expect(reducer(initialState, setFilter(filter))).toEqual({
      ...initialState,
      filter,
    });
  });
});
