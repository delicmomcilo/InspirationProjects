import { INIT, RESET, SET_PREEMPTION } from './constants';
import { Init } from './types/actions';
import { Preemption } from '../../../preemption/types';

export const init = ({ preemptionId }: Init) => ({ type: INIT, payload: { preemptionId } } as const);
export const reset = () => ({ type: RESET } as const);
export const setPreemption = (preemption: Preemption) => ({ type: SET_PREEMPTION, payload: { preemption } } as const);
