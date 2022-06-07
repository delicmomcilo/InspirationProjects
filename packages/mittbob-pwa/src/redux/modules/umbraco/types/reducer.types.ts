import * as actions from '../actions';
import { UmbracoObject } from './sagas.types';

export type Action =
  | ReturnType<typeof actions.get>
  | ReturnType<typeof actions.getSuccess>
  | ReturnType<typeof actions.getFailure>;

export type State = {
  loading: boolean;
  errors: {
    [key: string]: string;
  };
  [key: string]: UmbracoObject | boolean | string; // Cover all umbracoproperties
}
