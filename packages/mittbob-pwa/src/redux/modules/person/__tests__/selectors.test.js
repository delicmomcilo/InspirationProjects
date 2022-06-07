import selectors from '../selectors';
import { initialState } from '../reducer';

const state = {
  person: {
    configuration: {
      favoritePreemptions: {
        p1: 'p1',
        p2: 'p2',
      },
    },
  },
};

const empty = {
  person: initialState,
};

describe('modules/preemption/selectors', () => {
  it('with custom state', () => {
    expect(selectors.favorite('p1')(state)).toEqual('p1');
    expect(selectors.favoriteList(state)).toEqual(['p1', 'p2']);
    expect(selectors.favoriteCount(state)).toEqual(2);
  });
  it('with empty state', () => {
    expect(selectors.favorite('p1')(empty)).toEqual(undefined);
    expect(selectors.favoriteList(empty)).toEqual([]);
    expect(selectors.favoriteCount(empty)).toEqual(0);
  });
});
