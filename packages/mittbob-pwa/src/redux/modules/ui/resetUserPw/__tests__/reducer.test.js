import reducer, { initialState } from '../reducer';
import { ERRORS, RESET } from '../constants';
import * as actions from '../actions';
import { GET_PIN_SUCCESS, POST_PASSWORD_SUCCESS } from '../../../resetUserPw/constants';

describe('modules/ui/resetUserPw/reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it(`should handle ${RESET}`, () => {
    expect(reducer(initialState, actions.reset())).toEqual(initialState);
  });
  it(`should handle ${GET_PIN_SUCCESS}`, () => {
    expect(reducer(initialState, { type: GET_PIN_SUCCESS })).toEqual({
      ...initialState,
      stage: 2,
    });
  });

  it(`should handle ${POST_PASSWORD_SUCCESS}`, () => {
    expect(
      reducer(initialState, { type: POST_PASSWORD_SUCCESS, payload: { password: 'password' } }),
    ).toEqual({
      ...initialState,
      password: 'password',
      stage: 4,
    });
  });
  it(`should handle ${ERRORS}`, () => {
    const err = {
      e: {
        message: 'Err',
      },
    };
    expect(reducer(initialState, actions.errors(err))).toEqual({
      ...initialState,
      errors: err,
    });
  });
});
