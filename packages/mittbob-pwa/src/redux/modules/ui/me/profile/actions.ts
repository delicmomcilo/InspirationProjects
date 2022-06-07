import { SET_ERRORS, SET_EDIT, SAVE_PROFILE } from './constants';
import { SetEdit, SetErrors } from './types/action.types';
import { Person } from '../../../person/types';

export const setErrors = ({ errors }: SetErrors) =>
  ({
    type: SET_ERRORS,
    payload: { errors },
  } as const);

export const setEdit = ({ edit }: SetEdit) =>
  ({
    type: SET_EDIT,
    payload: { edit },
  } as const);

export const saveProfile = ({ email, mobile }: Partial<Person> ) =>
  ({
    type: SAVE_PROFILE,
    payload: { email, mobile },
  } as const);
