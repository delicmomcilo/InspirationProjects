import { Selectors } from './types/selectors.types';
import { RootState } from '../../rootState';

const selectors: Selectors = {
  get: (state: RootState) => state?.featureFlags?.flags,
};

export default selectors;
