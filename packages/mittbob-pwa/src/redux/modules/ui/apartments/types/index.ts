import { Preemption } from 'src/redux/modules/preemption/types';
import { SORT_ORDER_ASC, SORT_ORDER_DESC } from '../constants';

export type SortOrder = typeof SORT_ORDER_ASC | typeof SORT_ORDER_DESC;
export type SortSelector = (p: Preemption) => number;
export type PossibleSortings = Record<string, SortSelector>;
export interface ActiveSorting {
  field: string;
  order: SortOrder;
  selector: SortSelector;
}

export type FilterCategories = 'preemptionType' | 'buildingType' | 'subAreaName';
export type PossibleFilters = Record<FilterCategories, Array<string>>;
export type ActiveFilters = Record<FilterCategories, Set<string>>;
