import { Selectors } from './types/selectors.types';

const selectors: Selectors = {
  changesAuth0: state => state.ui.onboarding.changesAuth0,
};

export default selectors;
