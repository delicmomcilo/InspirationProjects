import * as constants from './constants';
import { Changes } from './types/reducer.types';

export const updateAuth0 = (changes: Changes) =>
  ({
    type: constants.UPDATE_AUTH0,
    payload: { ...changes },
  } as const);

export const close = () =>
  ({
    type: constants.CLOSE,
  } as const);

export const save = () =>
  ({
    type: constants.SAVE,
  } as const);

export const show = (value: boolean) =>
  ({
    type: constants.SHOW,
    payload: { show: value },
  } as const);

export const initFailure = (error: string) => ({
  type: constants.INIT_FAILURE,
  payload: { error },
});

export const setLoading = (value: boolean) =>
  ({
    type: constants.SET_LOADING,
    payload: { loading: value },
  } as const);

export const setError = (error: AnyError) =>
  ({
    type: constants.SET_ERROR,
    payload: { error },
  } as const);
