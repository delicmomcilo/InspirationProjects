import { Selectors } from './types/selectors.types';

const selectors: Selectors = {
  getDeletingInterestLoading: id => state => state.preemption.loadingDeleteInterest[id],
  preemption: id => state => state.preemption.allPreemptions[id],
  preemptionList: state => Object.values(state.preemption.allPreemptions),
  preemptionCount: state => Object.values(state.preemption.allPreemptions).length,
  interest: id => state => state.preemption.myInterests[id],
  interests: state => state.preemption.myInterests,
  interestKeys: state => Object.keys(state.preemption.myPreemptions),
  interestCount: state => Object.values(state.preemption.myPreemptions).length,
  getPreemptionsError: state => state.preemption.getPreemptionsError,
  getPreemptionError: state => state.preemption.getPreemptionError,
  getMyPreemptionsError: state => state.preemption.getMyPreemptionsError,
  getMyInterestsError: state => state.preemption.getMyInterestsError,
};

export default selectors;
