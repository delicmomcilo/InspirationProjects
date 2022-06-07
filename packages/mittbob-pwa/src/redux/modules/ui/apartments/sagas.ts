import { put, select, takeLatest } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import * as types from './types';
import selectors from '../../../selectors';
import { GET_PREEMPTIONS_SUCCESS, GET_FILTERS_SUCCESS } from '../../preemption/constants';
import { Preemption } from '../../preemption/types';

export function* getPossibleFiltersAsync({ payload }: AnyAction) {
  const initialFilters = yield select(selectors.ui.apartments.possibleFilters);

  yield put(
    actions.setPossibleFilters({
      filters: {
        ...initialFilters,
        ...payload?.filters,
      },
    }),
  );
}

export function* filterPreemptionsAsync({ payload }: AnyAction) {
  const filters: types.ActiveFilters = payload?.filters || {};

  let preemptions: Array<Preemption> = yield select(selectors.preemption.preemptionList);

  if (filters.preemptionType?.size) {
    preemptions = preemptions.filter(({ pricing: { totalPrice } }) => {
      // TODO: Add preemptionType to preemption object
      const preemptionType = totalPrice ? 'Fastpris' : 'Forhåndsavklaring';
      return filters.preemptionType.has(preemptionType);
    });
  }

  if (filters.buildingType?.size) {
    preemptions = preemptions.filter(({ unit: { buildingType } }) => {
      return filters.buildingType.has(buildingType);
    });
  }

  if (filters.subAreaName?.size) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TODO: Update area filter property
    preemptions = preemptions.filter(({ unit: { subArea } }) => {
      return filters.subAreaName.has(subArea);
    });
  }

  const filteredPreemptions = new Set(preemptions.map(preemption => preemption.id));
  yield put(actions.setFilteredPreemptions({ preemptions: filteredPreemptions }));
}

export function* sortPreemptionsAsync({ payload }: AnyAction) {
  let { order, selector }: types.ActiveSorting = payload?.sorting || {};

  if (selector === undefined) {
    ({ order, selector } = yield select(selectors.ui.apartments.activeSorting));
  }

  const preemptions: Array<Preemption> = yield select(selectors.preemption.preemptionList);

  const sortedPreemptionIds = (order === constants.SORT_ORDER_DESC
    ? preemptions.sort((a, b) => selector(b) - selector(a))
    : preemptions.sort((a, b) => selector(a) - selector(b))
  ).map(preemption => preemption.id);

  yield put(actions.setSortedPreemptions({ preemptions: sortedPreemptionIds }));
}

export default function*() {
  yield takeLatest(GET_FILTERS_SUCCESS, getPossibleFiltersAsync);
  yield takeLatest(constants.SET_ACTIVE_FILTERS, filterPreemptionsAsync);
  yield takeLatest(constants.SET_ACTIVE_SORTING, sortPreemptionsAsync);
  yield takeLatest(GET_PREEMPTIONS_SUCCESS, sortPreemptionsAsync);
}
