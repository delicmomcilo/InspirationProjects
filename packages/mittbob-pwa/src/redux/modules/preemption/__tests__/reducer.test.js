import reducer, { initialState } from '../reducer';
import * as actions from '../actions';

describe('modules/preemption/reducer', () => {
  it('initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('getPreemptions', () => {
    const preemptions = ['preemption1', 'preemption2', 'preemption3'];
    const error = 'getPreemptionsError';
    expect(reducer(undefined, actions.getPreemptions())).toEqual({
      ...initialState,
      loadingAllPreemptions: true,
    });
    expect(
      reducer(undefined, actions.getPreemptionsSuccess({ preemptions })),
    ).toEqual({
      ...initialState,
      loadingAllPreemptions: false,
      allPreemptions: { ...preemptions },
    });
    expect(
      reducer(undefined, actions.getPreemptionsFailure({ error })),
    ).toEqual({
      ...initialState,
      loadingAllPreemptions: false,
      getPreemptionsError: error,
    });
  });

  it('getPreemption', () => {
    const state = {
      ...initialState,
      allPreemptions: {
        p1: { id: 'p1' },
        p2: { id: 'p2' },
      },
    };
    const preemptions = { p3: { id: 'p3' } };
    const error = 'getPreemptionError';
    expect(reducer(undefined, actions.getPreemption({ id: 'p1' }))).toEqual({
      ...initialState,
      loadingPreemption: true,
    });
    expect(
      reducer(state, actions.getPreemptionSuccess({ preemptions })),
    ).toEqual({
      ...initialState,
      loadingPreemption: false,
      allPreemptions: {
        ...state.allPreemptions,
        ...preemptions,
      },
    });
    expect(reducer(undefined, actions.getPreemptionFailure({ error }))).toEqual(
      {
        ...initialState,
        loadingPreemption: false,
        getPreemptionError: error,
      },
    );
  });

  it('getMyPreemptions', () => {
    const preemptions = ['preemption2', 'preemption3'];
    const error = 'getMyPreemptionsError';
    expect(reducer(undefined, actions.getMyPreemptions())).toEqual({
      ...initialState,
      loadingMyPreemptions: true,
    });
    expect(
      reducer(undefined, actions.getMyPreemptionsSuccess({ preemptions })),
    ).toEqual({
      ...initialState,
      loadingMyPreemptions: false,
      allPreemptions: { ...preemptions },
      myPreemptions: preemptions,
    });
    expect(
      reducer(undefined, actions.getMyPreemptionsFailure({ error })),
    ).toEqual({
      ...initialState,
      loadingMyPreemptions: false,
      getMyPreemptionsError: error,
    });
  });

  it('getMyInterests', () => {
    const interests = ['interest2', 'interest3'];
    const error = 'getMyInterestsError';
    expect(reducer(undefined, actions.getMyInterests())).toEqual({
      ...initialState,
      loadingMyInterests: true,
    });
    expect(
      reducer(undefined, actions.getMyInterestsSuccess({ interests })),
    ).toEqual({
      ...initialState,
      loadingMyInterests: false,
      myInterests: interests,
    });
    expect(
      reducer(undefined, actions.getMyInterestsFailure({ error })),
    ).toEqual({
      ...initialState,
      loadingMyInterests: false,
      getMyInterestsError: error,
    });
  });
});
