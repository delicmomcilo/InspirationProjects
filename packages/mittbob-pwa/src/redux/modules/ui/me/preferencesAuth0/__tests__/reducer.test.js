import reducer, { initialState } from '../reducer';
import * as actions from '../actions';

describe('modules/ui/preferencesAuth0/reducer', () => {
  it('initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });


  it('update', () => {
    const state = reducer(undefined, actions.update({ magazineCode: 'M' }));
    expect(state).toEqual({
      ...initialState,
      changes: {
        ...initialState.changes,
        magazineCode: 'M',
      },
    });
    const state2 = reducer(
      state,
      actions.update({ communicationPreferences: { acceptMembershipInformationBySMS: true } }),
    );
    expect(state2).toEqual({
      ...state,
      changes: {
        ...state.changes,
        communicationPreferences: {
          ...state.changes.communicationPreferences,
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
    const err = 'err'
    expect(reducer(undefined, actions.setError(err))).toEqual({
      ...initialState,
      error: err,
    });
  });
});
