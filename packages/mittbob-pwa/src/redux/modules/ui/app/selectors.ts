import { Selectors } from './types/selectors.types';

const selectors: Selectors = {
  featureFlags: (state) => state?.ui.app.featureFlags,
};

export default selectors;

