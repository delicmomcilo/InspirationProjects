import { SW_ACTIVATE_WORKER, SW_INIT, SW_UPDATE } from './constants';

export const swInit = () => ({
  type: SW_INIT,
});

export const swUpdate = registration => ({
  type: SW_UPDATE,
  payload: { registration },
});

export const swActivateWorker = () => ({
  type: SW_ACTIVATE_WORKER,
});
