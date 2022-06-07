import { RootState } from '../../../../rootState';
import { Changes, State } from './reducer.types';

export interface Selectors {
  get: (state: RootState) => State;
  preferenceChanges: (state: RootState) => Changes;
}
