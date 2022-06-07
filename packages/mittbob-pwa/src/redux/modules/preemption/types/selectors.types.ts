import { RootState } from 'src/redux/rootState';
import * as types from '.';

export interface Selectors {
  getDeletingInterestLoading: (id: types.PreemptionId) => (state: RootState) => boolean;
  preemption: (id: types.PreemptionId) => (state: RootState) => types.Preemption;
  preemptionList: (state: RootState) => Array<types.Preemption>;
  preemptionCount: (state: RootState) => number;
  interest: (id: types.PreemptionId) => (state: RootState) => types.Interest;
  interests: (state: RootState) => types.Interests;
  interestKeys: (state: RootState) => Array<types.PreemptionId>;
  interestCount: (state: RootState) => number;
  getPreemptionsError: (state: RootState) => AnyError;
  getPreemptionError: (state: RootState) => AnyError;
  getMyPreemptionsError: (state: RootState) => AnyError;
  getMyInterestsError: (state: RootState) => AnyError;
}
