import { SET_CATEGORIES, SET_FILTER } from '../constants';
import { setCategories, setFilter } from '../actions';

describe('modules/ui/benefits/actions', () => {
  it('setCategories', () => {
    const categories = {
      Familie: {
        name: 'Familie',
        checked: true,
        count: 3,
      },
    };
    expect(setCategories(categories)).toEqual({
      type: SET_CATEGORIES,
      payload: categories,
    });
  });

  it('setFilter', () => {
    const filter = 'Familie';
    expect(setFilter(filter)).toEqual({
      type: SET_FILTER,
      payload: filter,
    });
  });
});
