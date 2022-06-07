import { Person } from '../../person/types';
import * as constants from './constants';
import { SetProfileErrors } from './types/action.types';
import { Changes } from './types/reducer.types';

export const updatePreferences = (changes: Changes) =>
  ({
    type: constants.UPDATE_PREFERENCES,
    payload: { ...changes },
  } as const);

  export const setPreferenceError = (error: AnyError) =>
  ({
    type: constants.SET_PREFERENCE_ERROR,
    payload: { error },
  } as const);

  export const setProfileErrors = ({ errors }: SetProfileErrors) =>
  ({
    type: constants.SET_PROFILE_ERRORS,
    payload: { errors },
  } as const);


  export const save = (payload: Partial<Person>) =>
  ({
    type: constants.SAVE,
    payload
  } as const);

  export const setLoading = (value: boolean) =>
  ({
    type: constants.SET_LOADING,
    payload: { loading: value },
  } as const);

export const show = (value: boolean) =>
({
  type: constants.SHOW,
  payload: { show: value },
} as const);

export const initFailure = (error: string) => 
({
  type: constants.INIT_FAILURE,
  payload: { error },
} as const);

export const abort = () =>
({
  type: constants.ABORT,
} as const);