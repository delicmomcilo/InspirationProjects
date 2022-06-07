import { Selectors } from './types/selectors.types';

const selectors: Selectors = {
  changes: state => state.ui.me.preferencesAuth0.changes,
};

export default selectors;
