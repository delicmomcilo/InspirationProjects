import * as actions from '../actions';

export interface State {
  flags: { [key: string]: boolean};
  error?: string;
  loading: boolean;

}

export type Action =
  | ReturnType<typeof actions['get']>
  | ReturnType<typeof actions['getSuccess']>
  | ReturnType<typeof actions['getFailure']>
  | ReturnType<typeof actions['watchGet']>;
