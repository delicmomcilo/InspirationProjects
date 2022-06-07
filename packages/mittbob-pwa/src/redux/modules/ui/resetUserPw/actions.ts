import {
  RESET,
  ERRORS,
  SET_HAS_SPECIAL_LANDCODES,
  SET_PIN_SUCCESS,
  SET_LANDCODE,
} from './constants';
import { ValidationErrors } from './types/actions.types';

export const reset = () => ({ type: RESET } as const);

export const errors = (e: ValidationErrors) => ({ type: ERRORS, payload: { errors: e } } as const);

export const setPin = (pin: string) =>
  ({
    type: SET_PIN_SUCCESS,
    payload: { pin },
  } as const);

export const setLandcode = (landcode: string) =>
  ({ type: SET_LANDCODE, payload: { landcode } } as const);
export const setHasSpecialLandcode = (hasSpecialLandcode: boolean) =>
  ({
    type: SET_HAS_SPECIAL_LANDCODES,
    payload: { hasSpecialLandcode },
  } as const);
