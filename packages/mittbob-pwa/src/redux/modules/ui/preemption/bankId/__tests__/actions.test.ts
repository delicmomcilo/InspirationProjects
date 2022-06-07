import * as actions from '../actions';
import { SET_ERROR, SET_SUCCESS } from '../constants';

describe('modules/ui/preepmtion/contactInfo/actions', () => {
  it(`setError`, () => {
    const error = { some: 'error' };

    expect(actions.setError(error)).toEqual({
      type: SET_ERROR,
      payload: { error }
    });
  });
  it(`setSuccess`, () => {
    const mock = {
      access_token: 'token',
      expires_in: 300,
      'not-before-policy': 0,
      refresh_expires_in: 1800,
      scope: 'openid profile',
      session_state: 'state',
      token_type: 'bearer',
    };
    expect(actions.setSuccess(mock)).toEqual({
      type: SET_SUCCESS,
      payload: {
        response: mock,
      },
    });
  });
});
