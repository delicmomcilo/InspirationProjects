import * as actions from '../actions';
import { Preemption } from '../../../../preemption/types';

export interface State {
  preemption?: Preemption
}

export interface Payload {
  preemption?: Preemption;
  preemptionId?: Preemption['id'];
}

export type Action =
  | ReturnType<typeof actions['init']>
  | ReturnType<typeof actions['setPreemption']>;
