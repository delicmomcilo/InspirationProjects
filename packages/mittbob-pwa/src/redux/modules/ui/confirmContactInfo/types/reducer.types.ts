import { Configuration, Person } from '../../../person/types';
import * as actions from '../actions';
import validate from '../../../../../validate';

export interface Changes extends Partial<Person> {
  communicationPreferences?: Configuration['communicationPreferences'];
}

export interface State {
  profileErrors: ReturnType<typeof validate>;
  preferenceError: string | null;
  show: boolean;
  loading: boolean;
  preferenceChanges: Changes;
  profileChanges: Partial<Person> 
}

export type Action =
  | ReturnType<typeof actions['show']>
  | ReturnType<typeof actions['initFailure']>
  | ReturnType<typeof actions['updatePreferences']>
  | ReturnType<typeof actions['setLoading']>
  | ReturnType<typeof actions['setPreferenceError']>
  | ReturnType<typeof actions['setProfileErrors']>
  | ReturnType<typeof actions['save']>
  | ReturnType<typeof actions['abort']>;