import { RootState } from 'src/redux/rootState';
import { Changes } from './reducer.types';

export interface Selectors {
  changes: (state: RootState) => Changes;
}
