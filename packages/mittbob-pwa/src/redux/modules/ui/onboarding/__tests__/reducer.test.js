import reducer, { initialState } from '../reducer';
import * as actions from '../actions';

describe('modules/ui/onboarding/reducer', () => {
  it('initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('show', () => {
    expect(reducer(undefined, actions.show(true))).toEqual({
      ...initialState,
      show: true,
    });
  });
  it('updateAuth0', () => {
    const state = reducer(undefined, actions.updateAuth0({ magazineCode: 'M' }));
    expect(state).toEqual({
      ...initialState,
      changesAuth0: {
        ...initialState.changesAuth0,
        magazineCode: 'M',
      },
    });
    const state2 = reducer(
      state,
      actions.updateAuth0({ communicationPreferences: { acceptMembershipInformationBySMS: true } }),
    );
    expect(state2).toEqual({
      ...state,
      changesAuth0: {
        ...state.changesAuth0,
        communicationPreferences: {
          ...state.changesAuth0.communicationPreferences,
          acceptMembershipInformationBySMS: true,
        },
      },
    });
  });
  it('setLoading', () => {
    expect(reducer(undefined, actions.setLoading(true))).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it('setError', () => {
    const idmUserUpdateError = {
      message: 'Some error',
    };
    expect(reducer(undefined, actions.setError(idmUserUpdateError))).toEqual({
      ...initialState,
      error: 'Some error',
    });
  });
});
