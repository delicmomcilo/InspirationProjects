import { testSaga } from 'redux-saga-test-plan';
import { getPinAsync, postPasswordAsync } from '../sagas';
import {
  getPin,
  getPinFailure,
  getPinSuccess,
  postPassword,
  postPasswordFailure,
  postPasswordSuccess,
} from '../actions';
import { api } from '../../../../config';
import { createQuery, unauthorizedPost, unauthorizedGet } from '../../../request';
import { getRecaptchaToken } from '../../../../helpers';

describe('modules/resetUserPw/sagas', () => {
  const mockDateOfBirth = new Date().toISOString();
  const mockNumber = '+4748282828';
  const mockPassword = 'mockked';
  const mockPin = '124353';
  const recaptchaToken = '123456';
  const testError = new Error('Test error');

  it.each([{ success: true, ok: true }, { success: true, ok: false }, { success: false }])(
    'getPinAsync',
    ({ success, ok }) => {
      const payload = {
        number: mockNumber,
        dateOfBirth: mockDateOfBirth,
      };
      const saga = testSaga(getPinAsync, { payload })
        .next()
        .put(getPin())
        .next()
        .call(getRecaptchaToken)
        .next(recaptchaToken)
        .call(unauthorizedGet, {
          url: `${api.resetUserPw}${createQuery({
            number: mockNumber,
            dateOfBirth: mockDateOfBirth,
            recaptchaToken,
          })}`,
        });

      if (success) {
        if (ok) saga.next({ response: { ok, statusText: '401' } }).put(getPinSuccess(mockNumber));
        else
          saga.next({ response: { ok, statusText: '401' } }).put(getPinFailure({ error: '401' }));
      } else saga.throw(testError).put(getPinFailure({ error: testError }));
      saga.next().isDone();
    },
  );

  it.each([{ success: true, ok: true }, { success: true, ok: false }, { success: false }])(
    'postPasswordAsync',
    ({ success, ok }) => {
      const payload = { password: mockPassword, pin: mockPin };
      const saga = testSaga(postPasswordAsync, { payload })
        .next()
        .put(postPassword())
        .next()
        .call(unauthorizedPost, {
          url: `${api.resetUserPw}`,
          data: { pin: mockPin, password: mockPassword },
        });

      if (success) {
        if (ok)
          saga.next({ response: { ok, statusText: '401' } }).put(postPasswordSuccess(mockPassword));
        else
          saga
            .next({ response: { ok, statusText: '401' } })
            .put(postPasswordFailure({ error: '401' }));
      } else saga.throw(testError).put(postPasswordFailure({ error: testError }));
      saga.next().isDone();
    },
  );
});
