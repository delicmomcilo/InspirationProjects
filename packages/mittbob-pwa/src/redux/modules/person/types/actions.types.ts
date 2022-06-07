import * as types from '.';
import { PreemptionId } from '../../preemption/types';

export type Seniority = { seniority: types.Seniority };
export type Configuration = { configuration: types.Configuration };
export type Error = { error: AnyError };
export type Id = { id: PreemptionId };
export type Search = { search: string };
export type Patch = {
  op: 'add' | 'remove';
  path: string;
  value?: string | boolean | number;
};
export type UpdatePerson = { email?: string, mobile?: string};
