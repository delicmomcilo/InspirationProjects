import selectors from '../selectors';
import { initialState } from '../reducer';

const state = {
  preemption: {
    loading: true,
    allPreemptions: {
      p1: { id: 'p1' },
    },
    myInterests: {
      p1: { id: 'i1', preemptionId: 'p1' },
    },
    myPreemptions: {
      p1: { id: 'p1' },
    },
  },
};

const empty = {
  preemption: initialState,
};

describe('modules/preemption/selectors', () => {
  it('with custom state', () => {
    expect(selectors.preemption('p1')(state)).toEqual(state.preemption.allPreemptions.p1);
    expect(selectors.preemptionList(state)).toEqual([state.preemption.allPreemptions.p1]);
    expect(selectors.preemptionCount(state)).toEqual(1);
    expect(selectors.interest('p1')(state)).toEqual(state.preemption.myInterests.p1);
    expect(selectors.interestKeys(state)).toEqual(['p1']);
    expect(selectors.interestCount(state)).toEqual(1);
  });
  it('with empty state', () => {
    expect(selectors.preemptionList(empty)).toEqual([]);
    expect(selectors.preemption('p1')(empty)).toEqual(undefined);
    expect(selectors.preemptionCount(empty)).toEqual(0);
    expect(selectors.interest('p1')(empty)).toEqual(undefined);
    expect(selectors.interestKeys(empty)).toEqual([]);
    expect(selectors.interestCount(empty)).toEqual(0);
  });
});
