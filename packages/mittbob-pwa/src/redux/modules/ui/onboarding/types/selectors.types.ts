import { RootState } from 'src/redux/rootState';
import { Changes } from './reducer.types';

export interface Selectors {
  changesAuth0: (state: RootState) => Changes;
}
