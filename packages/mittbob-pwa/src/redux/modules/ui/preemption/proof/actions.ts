import { ADD_FILES, REMOVE_FILE, SET_ERRORS, SET_FILES } from './constants';
import { Errors, Files } from './types/actions.types';


export const addFiles = (files: Files) => ({
  type: ADD_FILES,
  payload: {
    files,
  },
} as const);

export const setFiles = (files: Files) => ({
  type: SET_FILES,
  payload: {
    files,
  },
} as const);

export const setErrors = (errors: Errors) => ({
  type: SET_ERRORS,
  payload: {
    errors,
  },
} as const);

export const removeFile = (name: string) => ({
  type: REMOVE_FILE,
  payload: { name },
} as const);

