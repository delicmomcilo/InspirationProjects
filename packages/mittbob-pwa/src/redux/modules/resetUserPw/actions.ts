import {
  GET_PIN,
  GET_PIN_SUCCESS,
  GET_PIN_FAILURE,
  POST_PASSWORD,
  POST_PASSWORD_FAILURE,
  POST_PASSWORD_SUCCESS,
} from './constants';
import { WATCH_GET_PIN, WATCH_POST_PASSWORD } from './sagaConstants';
import { Error } from './types/actions.types';

export const getPin = () =>
  ({
    type: GET_PIN,
  } as const);

export const getPinSuccess = (mobileNumber: string) =>
  ({
    type: GET_PIN_SUCCESS,
    payload: { mobileNumber },
  } as const);

export const getPinFailure = ({ error }: Error) =>
  ({
    type: GET_PIN_FAILURE,
    payload: {
      error,
    },
  } as const);

export const watchGetPin = (number: string, dateOfBirth: string) =>
  ({
    type: WATCH_GET_PIN,
    payload: {
      number,
      dateOfBirth,
    },
  } as const);
export const postPassword = () =>
  ({
    type: POST_PASSWORD,
  } as const);

export const postPasswordSuccess = (password: string) =>
  ({
    type: POST_PASSWORD_SUCCESS,
    payload: { password },
  } as const);

export const postPasswordFailure = ({ error }: Error) =>
  ({
    type: POST_PASSWORD_FAILURE,
    payload: {
      error,
    },
  } as const);

export const watchPostPassword = (pin: string, password: string) =>
  ({
    type: WATCH_POST_PASSWORD,
    payload: {
      pin,
      password,
    },
  } as const);
