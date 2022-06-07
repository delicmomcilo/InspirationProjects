import { RootState } from '../../../../rootState';
import { State } from './reducer.types';

export interface Selectors {
  stage: (state: RootState) => State['stage'];
  landcode: (state: RootState) => State['landcode'];
  errors: (state: RootState) => State['errors'];
  hasSpecialLandcode: (state: RootState) => State['hasSpecialLandcode'];
}
