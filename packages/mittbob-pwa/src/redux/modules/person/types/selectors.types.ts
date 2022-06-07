import { RootState } from 'src/redux/rootState';
import { PreemptionId } from '../../preemption/types';
import { Configuration, Person } from './index';

export interface Selectors {
  loading: (state: RootState) => boolean;
  favorite: (id: PreemptionId) => (state: RootState) => PreemptionId | undefined;
  favoriteList: (state: RootState) => Array<PreemptionId>;
  favoriteCount: (state: RootState) => number;
  getConfigurationError: (state: RootState) => AnyError;
  configuration: (state: RootState) => Configuration
  person: (state: RootState) => Person | undefined
}
