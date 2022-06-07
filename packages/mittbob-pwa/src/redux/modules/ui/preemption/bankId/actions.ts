import {
  SET_ERROR,
  SET_SUCCESS,
} from './constants';
import { Error, Response } from './types/actions';

export const setSuccess = (response: Response) => ({ type: SET_SUCCESS, payload: { response } } as const);
export const setError = (error: Error) => ({ type: SET_ERROR, payload: { error } } as const);
