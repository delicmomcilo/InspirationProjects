import { Error, Response} from './actions';
import * as actions from '../actions';
import { reset } from '../../shared/actions';

export interface State {
  response?: Response;
  error?: Error;
}

export interface Payload {
  response?: Response;
  error?: Error;
}

export type Action =
  | ReturnType<typeof actions['setSuccess']>
  | ReturnType<typeof reset>
  | ReturnType<typeof actions['setError']>;
