import * as actions from '../actions';
import * as types from '.';
import * as constants from '../constants';

export interface State {
  loadingPostInterest: boolean;
  loadingAllPreemptions: boolean;
  loadingPreemption: boolean;
  loadingMyPreemptions: boolean;
  loadingMyInterests: boolean;
  loadingDeleteInterest: { [key: string]: boolean}
  allPreemptions: types.Preemptions;
  myPreemptions: types.Preemptions;
  myInterests: types.Interests;
  getPreemptionsError?: AnyError;
  getPreemptionError?: AnyError;
  getMyPreemptionsError?: AnyError;
  getMyInterestsError?: AnyError;
}

export interface Payload {
  error?: AnyError;
  preemptions?: types.Preemptions;
  interests?: types.Interests;
}

export type Action =
  | ReturnType<typeof actions['getPreemptions']>
  | ReturnType<typeof actions['getPreemptionsSuccess']>
  | ReturnType<typeof actions['getPreemptionsFailure']>
  | ReturnType<typeof actions['getPreemption']>
  | ReturnType<typeof actions['getPreemptionSuccess']>
  | ReturnType<typeof actions['getPreemptionFailure']>
  | ReturnType<typeof actions['getMyPreemptions']>
  | ReturnType<typeof actions['getMyPreemptionsSuccess']>
  | ReturnType<typeof actions['getMyPreemptionsFailure']>
  | ReturnType<typeof actions['getMyInterests']>
  | ReturnType<typeof actions['getMyInterestsSuccess']>
  | ReturnType<typeof actions['getMyInterestsFailure']>
  | ReturnType<typeof actions['postInterest']>
  | ReturnType<typeof actions['postInterestSuccess']>
  | ReturnType<typeof actions['postInterestFailure']>
  | ReturnType<typeof actions['deleteInterest']>
  | ReturnType<typeof actions['deleteInterestSuccess']>
  | ReturnType<typeof actions['deleteInterestFailure']>
  | ReturnType<typeof actions['getFilters']>
  | ReturnType<typeof actions['getFiltersSuccess']>
  | ReturnType<typeof actions['getFiltersFailure']>;
