import { RootState } from '../../../../../rootState';
import { State } from './reducer.types';
import { Person } from '../../../../person/types';

export interface Selectors {
  get: (state: RootState) => State;
}
