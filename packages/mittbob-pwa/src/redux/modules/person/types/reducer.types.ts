import * as actions from '../actions';
import * as types from '.';
import { Person } from '.';

export interface State {
  loading: boolean;
  seniority: types.Seniority;
  configuration: types.Configuration;
  seniorityError?: AnyError;
  personError?: AnyError;
  configurationError?: AnyError;
  person?: Person
}

export type Action =
  | ReturnType<typeof actions['getPerson']>
  | ReturnType<typeof actions['getPersonSuccess']>
  | ReturnType<typeof actions['getPersonFailure']>
  | ReturnType<typeof actions['getSeniority']>
  | ReturnType<typeof actions['getSenioritySuccess']>
  | ReturnType<typeof actions['getSeniorityFailure']>
  | ReturnType<typeof actions['getConfiguration']>
  | ReturnType<typeof actions['getConfigurationSuccess']>
  | ReturnType<typeof actions['getConfigurationFailure']>
  | ReturnType<typeof actions['putConfiguration']>
  | ReturnType<typeof actions['putConfigurationSuccess']>
  | ReturnType<typeof actions['putConfigurationFailure']>
  | ReturnType<typeof actions['patchConfiguration']>
  | ReturnType<typeof actions['patchConfigurationSuccess']>
  | ReturnType<typeof actions['patchConfigurationFailure']>
  | ReturnType<typeof actions['patchPerson']>
  | ReturnType<typeof actions['patchPersonSuccess']>
  | ReturnType<typeof actions['patchPersonFailure']>
  | ReturnType<typeof actions['addFavoritePreemption']>
  | ReturnType<typeof actions['removeFavoritePreemption']>
  | ReturnType<typeof actions['setSavedSearch']>;
