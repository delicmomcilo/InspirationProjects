import { PreemptionId } from 'src/redux/modules/preemption/types';
import * as types from '.';

export type Id = { id: PreemptionId };
export type ActiveFilters = { filters: types.ActiveFilters };
export type PossibleFitlers = { filters: types.PossibleFilters };
export type ActiveSorting = { sorting: types.ActiveSorting };
export type FilteredPreemptions = { preemptions: Set<PreemptionId> };
export type SortedPreemptions = { preemptions: Array<PreemptionId> };
