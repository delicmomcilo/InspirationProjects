import * as actions from '../actions';
import { Configuration, Person } from '../../../person/types';

export interface Changes extends Partial<Person> {
  communicationPreferences?: Configuration['communicationPreferences'];
}
export interface State {
  error: string | null;
  show: boolean;
  loading: boolean;
  changesAuth0: Changes;
}

export type Action =
  | ReturnType<typeof actions['close']>
  | ReturnType<typeof actions['updateAuth0']>
  | ReturnType<typeof actions['show']>
  | ReturnType<typeof actions['setLoading']>
  | ReturnType<typeof actions['setError']>
  | ReturnType<typeof actions['save']>;
