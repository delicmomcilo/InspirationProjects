import * as actions from '../actions';
import * as constants from '../constants';

describe('modules/ui/onboarding/actions', () => {
  it('updateAuth0', () => {
    const updates = {
      communicationPreferences: {
        acceptMembershipInformationByEmail: true,
      },
    };
    expect(actions.updateAuth0(updates)).toEqual({
      type: constants.UPDATE_AUTH0,
      payload: { ...updates },
    });
  });
  it('close', () => {
    expect(actions.close()).toEqual({
      type: constants.CLOSE,
    });
  });
  it('save', () => {
    expect(actions.save()).toEqual({
      type: constants.SAVE,
    });
  });
  it('show', () => {
    expect(actions.show(true)).toEqual({
      type: constants.SHOW,
      payload: { show: true },
    });
  });
  it('setLoading', () => {
    expect(actions.setLoading(true)).toEqual({
      type: constants.SET_LOADING,
      payload: { loading: true },
    });
  });
  it('setError', () => {
    const idmUserUpdateError = {
      message: 'Some error'
    }
    expect(actions.setError(idmUserUpdateError)).toEqual({
      type: constants.SET_ERROR,
      payload: { error: idmUserUpdateError },
    });
  });
});
