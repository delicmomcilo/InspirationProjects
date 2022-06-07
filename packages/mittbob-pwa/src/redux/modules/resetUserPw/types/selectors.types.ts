import { RootState } from '../../../rootState';
import { State } from './reducer.types';

export interface Selectors {
  loading: (state: RootState) => State['loading'];
}
