import { advanceTo } from 'jest-date-mock';
import reducer, { initialState } from '../reducer';
import { swInit, swActivateWorker, swUpdate } from '../actions';
import * as constants from '../constants';

describe('modules/auth/reducer', () => {
  const postMessage = jest.fn();
  const addEventListener = jest.fn();
  const serviceWorkerRegistration = {
    waiting: {
      postMessage,
      addEventListener,
    },
  };
  advanceTo(new Date(2020, 3, 10, 0, 0, 0)); // reset to date time.

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${constants.SW_INIT}`, () => {
    expect(reducer(initialState, swInit())).toEqual({
      ...initialState,
      serviceWorkerInitialized: true,
    });
  });
  it(`should handle ${constants.SW_UPDATE}`, () => {
    expect(reducer(initialState, swUpdate(serviceWorkerRegistration))).toEqual({
      ...initialState,
      serviceWorkerInitialized: true,
      serviceWorkerUpdated: new Date(),
      serviceWorkerRegistration,
    });
  });

  it(`should handle ${constants.SW_ACTIVATE_WORKER}`, () => {
    const state = reducer(initialState, swUpdate(serviceWorkerRegistration));
    expect(reducer(state, swActivateWorker(serviceWorkerRegistration))).toEqual(
      state,
    );
    expect(serviceWorkerRegistration.waiting.postMessage).toBeCalledWith({
      type: 'SKIP_WAITING',
    });
    expect(serviceWorkerRegistration.waiting.addEventListener).toBeCalled();
  });
});
