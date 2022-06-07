import { swInit, swUpdate, swActivateWorker } from '../actions';
import * as constants from '../constants';

describe('modules/app/actions', () => {
  const servceWorkerRegistration = { name: 'A SW reg object' };
  it('swInit', () => {
    expect(swInit()).toEqual({
      type: constants.SW_INIT,
    });
  });
  it('swUpdate', () => {
    expect(swUpdate(servceWorkerRegistration)).toEqual({
      type: constants.SW_UPDATE,
      payload: { registration: servceWorkerRegistration },
    });
  });
  it('swActivateWorker', () => {
    expect(swActivateWorker()).toEqual({
      type: constants.SW_ACTIVATE_WORKER,
    });
  });
});
