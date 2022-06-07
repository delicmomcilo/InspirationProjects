import reducer, { initialState } from '../reducer';
import * as constants from '../constants';

describe('modules/ui/preemption/bankId', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, undefined)).toEqual(initialState);
  });

  it(`should handle ${constants.SET_ERROR}`, () => {
    const error = { some: 'error'};
    expect(reducer(initialState, { type: constants.SET_ERROR, payload: { error } })).toEqual({
      ...initialState,
      error,
    });
  });

  it(`should handle ${constants.SET_SUCCESS}`, () => {
    const mock = {
      access_token: 'token',
      expires_in: 300,
      'not-before-policy': 0,
      refresh_expires_in: 1800,
      scope: 'openid profile',
      session_state: 'state',
      token_type: 'bearer',
    };
    expect(
      reducer(initialState, { type: constants.SET_SUCCESS, payload: { response: mock } }),
    ).toEqual({
      ...initialState,
      response: mock,
    });
  });
});
