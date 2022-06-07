import validate from 'src/validate';
import { setEdit, setErrors, saveProfile } from '../actions';
import { Person } from '../../../../person/types';

export interface State {
  errors: ReturnType<typeof validate>;
  edit: boolean;
  changes: Partial<Person>;
}

export type Action = 
  ReturnType<typeof setErrors> 
  | ReturnType<typeof setEdit> 
  | ReturnType<typeof saveProfile>;
