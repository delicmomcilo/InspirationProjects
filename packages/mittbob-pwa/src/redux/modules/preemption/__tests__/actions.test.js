import * as actions from '../actions';
import * as constants from '../constants';

describe('modules/preemption/actions', () => {
  it('getPreemptions', () => {
    const preemptions = ['preemption1', 'preemption2', 'preemption3'];
    const error = 'getPreemptionsError';
    expect(actions.getPreemptions()).toEqual({
      type: constants.GET_PREEMPTIONS,
    });
    expect(actions.getPreemptionsSuccess({ preemptions })).toEqual({
      type: constants.GET_PREEMPTIONS_SUCCESS,
      payload: { preemptions },
    });
    expect(actions.getPreemptionsFailure({ error })).toEqual({
      type: constants.GET_PREEMPTIONS_FAILURE,
      payload: { error },
    });
  });

  it('getPreemption', () => {
    const id = 'p1';
    const preemptions = ['preemption1', 'preemption2', 'preemption3'];
    const error = 'getPreemptionError';
    expect(actions.getPreemption({ id })).toEqual({
      type: constants.GET_PREEMPTION,
      payload: { id },
    });
    expect(actions.getPreemptionSuccess({ preemptions })).toEqual({
      type: constants.GET_PREEMPTION_SUCCESS,
      payload: { preemptions },
    });
    expect(actions.getPreemptionFailure({ error })).toEqual({
      type: constants.GET_PREEMPTION_FAILURE,
      payload: { error },
    });
  });

  it('getMyPreemptions', () => {
    const preemptions = ['preemption2', 'preemption3'];
    const error = 'getMyPreemptionsError';
    expect(actions.getMyPreemptions()).toEqual({
      type: constants.GET_MY_PREEMPTIONS,
    });
    expect(actions.getMyPreemptionsSuccess({ preemptions })).toEqual({
      type: constants.GET_MY_PREEMPTIONS_SUCCESS,
      payload: { preemptions },
    });
    expect(actions.getMyPreemptionsFailure({ error })).toEqual({
      type: constants.GET_MY_PREEMPTIONS_FAILURE,
      payload: { error },
    });
  });

  it('getMyInterests', () => {
    const interests = ['interest2', 'interest3'];
    const error = 'getMyInterestsError';
    expect(actions.getMyInterests()).toEqual({
      type: constants.GET_MY_INTERESTS,
    });
    expect(actions.getMyInterestsSuccess({ interests })).toEqual({
      type: constants.GET_MY_INTERESTS_SUCCESS,
      payload: { interests },
    });
    expect(actions.getMyInterestsFailure({ error })).toEqual({
      type: constants.GET_MY_INTERESTS_FAILURE,
      payload: { error },
    });
  });

  it('postInterest', () => {
    const interests = ['interest2', 'interest3'];
    const error = 'postInterestError';
    expect(actions.postInterest({ id: 'p1' })).toEqual({
      type: constants.POST_INTEREST,
      payload: { id: 'p1' },
    });
    expect(actions.postInterestSuccess({ interests })).toEqual({
      type: constants.POST_INTEREST_SUCCESS,
      payload: { interests },
    });
    expect(actions.postInterestFailure({ error })).toEqual({
      type: constants.POST_INTEREST_FAILURE,
      payload: { error },
    });
  });

  it('deleteInterest', () => {
    const error = 'deleteInterestError';
    expect(actions.deleteInterest({ id: 'p1', interestId: 'i1' })).toEqual({
      type: constants.DELETE_INTEREST,
      payload: { id: 'p1', interestId: 'i1' },
    });
    expect(actions.deleteInterestSuccess('p1')).toEqual({
      type: constants.DELETE_INTEREST_SUCCESS,
      payload: { id: 'p1' },
    });
    expect(actions.deleteInterestFailure({ id: 'p1', error })).toEqual({
      type: constants.DELETE_INTEREST_FAILURE,
      payload: { id: 'p1', error },
    });
  });

  it('getFilters', () => {
    const filters = 'getFiltersSuccess';
    const error = 'getFiltersError';
    expect(actions.getFilters()).toEqual({
      type: constants.GET_FILTERS,
    });
    expect(actions.getFiltersSuccess({ filters })).toEqual({
      type: constants.GET_FILTERS_SUCCESS,
      payload: { filters },
    });
    expect(actions.getFiltersFailure({ error })).toEqual({
      type: constants.GET_FILTERS_FAILURE,
      payload: { error },
    });
  });
});
