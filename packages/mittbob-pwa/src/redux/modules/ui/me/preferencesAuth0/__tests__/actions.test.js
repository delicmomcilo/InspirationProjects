import * as actions from '../actions';
import * as constants from '../constants';

describe('modules/ui/preferencesAuth0/actions', () => {
  it('update', () => {
    const updates = {
      communicationPreferences: {
        acceptElectronicCommunication: true,
      },
    };
    expect(actions.update(updates)).toEqual({
      type: constants.UPDATE,
      payload: { ...updates },
    });
  });

  it('save', () => {
    expect(actions.save()).toEqual({
      type: constants.SAVE,
    });
  });

  it('setLoading', () => {
    expect(actions.setLoading(true)).toEqual({
      type: constants.SET_LOADING,
      payload: { loading: true },
    });
  });
  it('setError', () => {
    const err = 'err'
    expect(actions.setError(err)).toEqual({
      type: constants.SET_ERROR,
      payload: { error: err },
    });
  });
});
