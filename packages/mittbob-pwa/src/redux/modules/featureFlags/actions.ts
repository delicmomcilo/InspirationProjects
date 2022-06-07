import {
  GET,
  GET_FAILURE,
  GET_SUCCESS,
} from './constants';
import {
  WATCH_GET,
} from './sagaConstants';
import { Error, SuccessPayload } from './types/action.types';

export const get = () => ({ type: GET } as const);
export const getFailure = ({ error }: Error) =>
  ({
    type: GET_FAILURE,
    payload: { error },
  } as const);
export const getSuccess = (featureFlags: SuccessPayload) =>
  ({
    type: GET_SUCCESS,
    payload: { featureFlags },
  } as const);

export const watchGet = () =>
  ({
    type: WATCH_GET,
  } as const);
