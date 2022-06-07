import reducer, { initialState } from '../reducer';
import {
  getPin,
  getPinFailure,
  getPinSuccess,
  postPassword,
  postPasswordFailure,
  postPasswordSuccess,
} from '../actions';
import {
  GET_PIN_FAILURE,
  GET_PIN_SUCCESS,
  GET_PIN,
  POST_PASSWORD_FAILURE,
  POST_PASSWORD_SUCCESS,
  POST_PASSWORD,
} from '../constants';

describe('modules/resetUserPw/reducer', () => {
  const testError = new Error('Test error');

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${GET_PIN}`, () => {
    expect(reducer(initialState, getPin())).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it(`should handle ${GET_PIN_FAILURE}`, () => {
    expect(reducer(initialState, getPinFailure({ error: testError }))).toEqual({
      ...initialState,
      loading: false,
      error: testError,
    });
  });

  it(`should handle ${GET_PIN_SUCCESS}`, () => {
    expect(reducer(initialState, getPinSuccess())).toEqual({
      ...initialState,
      loading: false,
    });
  });
  it(`should handle ${POST_PASSWORD}`, () => {
    expect(reducer(initialState, postPassword())).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it(`should handle ${POST_PASSWORD_FAILURE}`, () => {
    expect(
      reducer(initialState, postPasswordFailure({ error: testError })),
    ).toEqual({
      ...initialState,
      loading: false,
      error: testError,
    });
  });

  it(`should handle ${POST_PASSWORD_SUCCESS}`, () => {
    expect(reducer(initialState, postPasswordSuccess())).toEqual({
      ...initialState,
      isPostPasswordSuccess: true,
      loading: false,
    });
  });
});
