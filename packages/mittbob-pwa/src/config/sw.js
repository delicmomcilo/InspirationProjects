import { env } from './helpers';

let lookForUpdatesInterval = 360000;
try {
  const parsed = parseInt(
    env.REACT_APP_SERVICE_WORKER_LOOK_FOR_UPDATES_INTERVAL,
    10,
  );
  if (!Number.isNaN(parsed)) lookForUpdatesInterval = parsed;
} catch (e) {
  // Silent fail
}

export default {
  lookForUpdatesInterval,
};
