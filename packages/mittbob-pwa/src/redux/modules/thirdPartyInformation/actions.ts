import {
  GET,
  GET_FAILURE,
  GET_SUCCESS,
  GET_THIRD_PARTY_INFORMATION_FILE,
  GET_THIRD_PARTY_INFORMATION_FILE_FAILURE,
  GET_THIRD_PARTY_INFORMATION_FILE_SUCCESS,
} from './constants';
import {
  WATCH_GET,
  WATCH_GET_THIRD_PARTY_INFORMATION_FILE,
} from './sagaConstants';
import {Error, SuccessPayload, ThirdPartyInformationId} from './types/action.types';

export const get = () => ({ type: GET } as const);
export const getFailure = ({ error }: Error) =>
  ({
    type: GET_FAILURE,
    payload: { error },
  } as const);
  
export const getSuccess = (thirdPartyInformations: SuccessPayload) => 
  ({
    type: GET_SUCCESS,
    payload: { thirdPartyInformations },
  } as const);

export const watchGet = () =>
  ({
    type: WATCH_GET,
  } as const);

export const getThirdPartyInformationFile = () => ({ type: GET_THIRD_PARTY_INFORMATION_FILE } as const);
export const getThirdPartyInformationFileFailure = ({ error }: Error) =>
  ({
    type: GET_THIRD_PARTY_INFORMATION_FILE_FAILURE,
    payload: { error },
  } as const);
export const getThirdPartyInformationFileSuccess = (id: ThirdPartyInformationId) =>
  ({
    type: GET_THIRD_PARTY_INFORMATION_FILE_SUCCESS,
    payload: { id },
  } as const);

export const watchGetThirdPartyInformationFile = (id: ThirdPartyInformationId) =>
  ({
    payload: { id },
    type: WATCH_GET_THIRD_PARTY_INFORMATION_FILE
  } as const);
