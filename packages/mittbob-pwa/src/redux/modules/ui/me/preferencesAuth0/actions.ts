import * as constants from './constants';
import { Changes } from './types/reducer.types';

export const update = (changes: Changes) =>
  ({
    type: constants.UPDATE,
    payload: { ...changes },
  } as const);

export const init = () =>
  ({
    type: constants.INIT,
  } as const);

export const save = () =>
  ({
    type: constants.SAVE,
  } as const);

export const setLoading = (value: boolean) => ({
  type: constants.SET_LOADING,
  payload: { loading: value}
} as const)

export const setError = (error: string ) => ({
  type: constants.SET_ERROR,
  payload: { error}
} as const)
