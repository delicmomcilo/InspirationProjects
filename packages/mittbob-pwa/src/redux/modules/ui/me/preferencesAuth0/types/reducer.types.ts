import * as actions from '../actions';
import { Configuration, Person } from '../../../../person/types';

// export type Changes = Partial<Person> & { communicationPreferences?: Configuration['communicationPreferences']}
export interface Changes extends Partial<Person>
{ communicationPreferences?: Configuration['communicationPreferences']
}

export interface State {
  error: string | null;
  show: boolean;
  loading: boolean;
  changes: Changes;
}

export type Action =
  | ReturnType<typeof actions['init']>
  | ReturnType<typeof actions['update']>
  | ReturnType<typeof actions['setLoading']>
  | ReturnType<typeof actions['setError']>
  | ReturnType<typeof actions['save']>;
