import { SW_INIT, SW_UPDATE, SW_ACTIVATE_WORKER } from './constants';

export const initialState = {
  serviceWorkerInitialized: false,
  serviceWorkerUpdated: false,
  serviceWorkerRegistration: undefined,
};

export default (state = initialState, action) => {
  const { payload = {} } = action;
  const { registration } = payload;
  switch (action.type) {
    case SW_INIT:
      return { ...state, serviceWorkerInitialized: true };
    case SW_UPDATE:
      return {
        ...state,
        serviceWorkerInitialized: true,
        serviceWorkerUpdated: new Date(),
        serviceWorkerRegistration: registration,
      };
    case SW_ACTIVATE_WORKER: {
      const { serviceWorkerRegistration } = state;
      if (serviceWorkerRegistration) {
        const registrationWaiting = serviceWorkerRegistration.waiting;
        if (registrationWaiting) {
          registrationWaiting.postMessage({ type: 'SKIP_WAITING' });
          registrationWaiting.addEventListener('statechange', e => {
            if (e.target.state === 'activated') {
              window.location.reload();
            }
          });
        }
      }
      return state;
    }
    default:
      return state;
  }
};
