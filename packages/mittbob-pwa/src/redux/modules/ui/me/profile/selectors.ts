import { Selectors } from './types/selectors.types';

const selectors: Selectors = {
  get: state => state.ui.me.profile
};

export default selectors;
