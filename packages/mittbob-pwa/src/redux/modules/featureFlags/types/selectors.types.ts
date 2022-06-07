import { RootState } from '../../../rootState';
import { State } from './reducer.types';

export interface Selectors {
  get: (state: RootState) => State['flags'];
}
