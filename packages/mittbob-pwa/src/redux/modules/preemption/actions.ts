import * as constants from './constants';
import * as types from './types/actions.types';
import { Id, PostInterestPayload } from './types/actions.types';

export const getPreemptions = () =>
  ({
    type: constants.GET_PREEMPTIONS,
  } as const);

export const getPreemptionsSuccess = ({ preemptions }: types.Preemptions) =>
  ({
    type: constants.GET_PREEMPTIONS_SUCCESS,
    payload: { preemptions },
  } as const);

export const getPreemptionsFailure = ({ error }: types.Error) =>
  ({
    type: constants.GET_PREEMPTIONS_FAILURE,
    payload: { error },
  } as const);

export const getPreemption = ({ id }: types.Id) =>
  ({
    type: constants.GET_PREEMPTION,
    payload: { id },
  } as const);

export const getPreemptionSuccess = ({ preemptions }: types.Preemptions) =>
  ({
    type: constants.GET_PREEMPTION_SUCCESS,
    payload: { preemptions },
  } as const);

export const getPreemptionFailure = ({ error }: types.Error) =>
  ({
    type: constants.GET_PREEMPTION_FAILURE,
    payload: { error },
  } as const);

export const getMyPreemptions = () =>
  ({
    type: constants.GET_MY_PREEMPTIONS,
  } as const);

export const getMyPreemptionsSuccess = ({ preemptions }: types.Preemptions) =>
  ({
    type: constants.GET_MY_PREEMPTIONS_SUCCESS,
    payload: { preemptions },
  } as const);

export const getMyPreemptionsFailure = ({ error }: types.Error) =>
  ({
    type: constants.GET_MY_PREEMPTIONS_FAILURE,
    payload: { error },
  } as const);

export const getMyInterests = () =>
  ({
    type: constants.GET_MY_INTERESTS,
  } as const);

export const getMyInterestsSuccess = ({ interests }: types.Interests) =>
  ({
    type: constants.GET_MY_INTERESTS_SUCCESS,
    payload: { interests },
  } as const);

export const getMyInterestsFailure = ({ error }: types.Error) =>
  ({
    type: constants.GET_MY_INTERESTS_FAILURE,
    payload: { error },
  } as const);

export const postInterest = ({ id, data }: PostInterestPayload) =>
  ({
    type: constants.POST_INTEREST,
    payload: { id, data },
  } as const);

export const postInterestSuccess = ({ interests }: types.Interests & Id) =>
  ({
    type: constants.POST_INTEREST_SUCCESS,
    payload: { interests },
  } as const);

export const postInterestFailure = ({ error }: types.Error) =>
  ({
    type: constants.POST_INTEREST_FAILURE,
    payload: { error },
  } as const);

export const deleteInterest = ({ id, interestId }: types.InterestId) =>
  ({
    type: constants.DELETE_INTEREST,
    payload: { id, interestId },
  } as const);

export const deleteInterestSuccess = (id: string) =>
  ({
    type: constants.DELETE_INTEREST_SUCCESS,
    payload: { id },
  } as const);

export const deleteInterestFailure = ({id, error }: types.Id & types.Error) =>
  ({
    type: constants.DELETE_INTEREST_FAILURE,
    payload: { error, id },
  } as const);

export const getFilters = () =>
  ({
    type: constants.GET_FILTERS,
  } as const);

export const getFiltersSuccess = ({ filters }: types.Filters) =>
  ({
    type: constants.GET_FILTERS_SUCCESS,
    payload: { filters },
  } as const);

export const getFiltersFailure = ({ error }: types.Error) =>
  ({
    type: constants.GET_FILTERS_FAILURE,
    payload: { error },
  } as const);
