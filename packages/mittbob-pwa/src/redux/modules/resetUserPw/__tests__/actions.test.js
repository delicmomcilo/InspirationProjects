import {
  GET_PIN,
  GET_PIN_FAILURE,
  GET_PIN_SUCCESS,
  POST_PASSWORD_SUCCESS,
  POST_PASSWORD_FAILURE,
  POST_PASSWORD,
} from '../constants';
import {
  getPin,
  getPinFailure,
  getPinSuccess,
  watchPostPassword,
  watchGetPin,
  postPasswordSuccess,
  postPasswordFailure,
  postPassword,
} from '../actions';
import { WATCH_POST_PASSWORD, WATCH_GET_PIN } from '../sagaConstants';

describe('modules/resetUserPw/actions', () => {
  const mockDateOfBirth = new Date().toISOString();
  const mockNumber = '+4748282828';
  const mockPassword = 'mockked';
  const mockPin = '124353';
  const testError = new Error('Test error');
  it('watchGetPin', () => {
    expect(watchGetPin(mockNumber, mockDateOfBirth)).toEqual({
      type: WATCH_GET_PIN,
      payload: {
        number: mockNumber,
        dateOfBirth: mockDateOfBirth,
      },
    });
  });
  it('watchPostPassword', () => {
    expect(watchPostPassword(mockPin, mockPassword)).toEqual({
      type: WATCH_POST_PASSWORD,
      payload: {
        password: mockPassword,
        pin: mockPin,
      },
    });
  });
  it('getPin', () => {
    expect(getPin()).toEqual({
      type: GET_PIN,
    });
  });
  it('getPinSuccess', () => {
    expect(getPinSuccess(mockNumber)).toEqual({
      type: GET_PIN_SUCCESS,
      payload: { mobileNumber: mockNumber },
    });
  });
  it('getPinFailure', () => {
    expect(getPinFailure({ error: testError })).toEqual({
      type: GET_PIN_FAILURE,
      payload: { error: testError },
    });
  });

  it('postPassword', () => {
    expect(postPassword()).toEqual({
      type: POST_PASSWORD,
    });
  });
  it('postPasswordSuccess', () => {
    expect(postPasswordSuccess(mockPassword)).toEqual({
      type: POST_PASSWORD_SUCCESS,
      payload: { password: mockPassword },
    });
  });
  it('postPasswordFailure', () => {
    expect(postPasswordFailure({ error: testError })).toEqual({
      type: POST_PASSWORD_FAILURE,
      payload: { error: testError },
    });
  });
});
