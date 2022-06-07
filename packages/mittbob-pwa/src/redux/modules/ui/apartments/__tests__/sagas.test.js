import { testSaga } from 'redux-saga-test-plan';
import * as sagas from '../sagas';
import * as actions from '../actions';
import selectors from '../../../../selectors';
import { SORT_ORDER_ASC, SORT_ORDER_DESC } from '../constants';

describe('modules/ui/apartments/sagas', () => {
  const preemptionList = [
    {
      id: 'p1',
      unit: {
        buildingType: 'Leilighet',
        subArea: 'Hordaland',
        areaName: 'Bergen',
      },
      pricing: {
        totalPrice: 5,
      },
    },
    {
      id: 'p2',
      unit: {
        buildingType: 'Leilighet',
        subArea: 'Rogaland',
        areaName: 'Stavanger',
      },
      pricing: {
        totalPrice: 3,
      },
    },
    {
      id: 'p3',
      unit: {
        buildingType: 'Enebolig',
        subArea: 'Rogaland',
        areaName: 'Stavanger',
      },
      pricing: {
        totalPrice: 7,
      },
    },
    {
      id: 'p4',
      unit: {
        buildingType: null,
        subArea: null,
        areaName: null,
      },
      pricing: {},
    },
  ];

  describe('getPossibleFilters', () => {
    it('extracts filters from preemptions', () => {
      const payload = {
        filters: {
          buildingType: ['Leilighet', 'Enebolig'],
          subAreaName: ['Hordaland', 'Rogaland'],
        },
      };

      testSaga(sagas.getPossibleFiltersAsync, { payload })
        .next()
        .select(selectors.ui.apartments.possibleFilters)
        .next({
          preemptionType: ['Fastpris', 'Forhåndsavklaring'],
          buildingType: [],
          subAreaName: [],
        })
        .put(
          actions.setPossibleFilters({
            filters: {
              preemptionType: ['Fastpris', 'Forhåndsavklaring'],
              buildingType: ['Leilighet', 'Enebolig'],
              subAreaName: ['Hordaland', 'Rogaland'],
            },
          }),
        )
        .next()
        .isDone();
    });

    it('returns default filters', () => {
      const initialFilters = {
        preemptionType: ['Fastpris', 'Forhåndsavklaring'],
        buildingType: [],
        subAreaName: [],
      };

      testSaga(sagas.getPossibleFiltersAsync, {})
        .next()
        .select(selectors.ui.apartments.possibleFilters)
        .next(initialFilters)
        .put(actions.setPossibleFilters({ filters: initialFilters }))
        .next()
        .isDone();
    });
  });

  describe('filterPreemptions', () => {
    it('buildingType filter', () => {
      const payload = {
        filters: {
          preemptionType: new Set(),
          buildingType: new Set(['Leilighet']),
          subAreaName: new Set(),
        },
      };

      testSaga(sagas.filterPreemptionsAsync, { payload })
        .next()
        .select(selectors.preemption.preemptionList)
        .next(preemptionList)
        .put(
          actions.setFilteredPreemptions({
            preemptions: new Set(['p1', 'p2']),
          }),
        )
        .next()
        .isDone();
    });

    it('preemptionType filter', () => {
      const payload = {
        filters: {
          preemptionType: new Set(['Fastpris']),
          buildingType: new Set(),
          subAreaName: new Set(),
        },
      };

      testSaga(sagas.filterPreemptionsAsync, { payload })
        .next()
        .select(selectors.preemption.preemptionList)
        .next(preemptionList)
        .put(
          actions.setFilteredPreemptions({
            preemptions: new Set(['p1', 'p2', 'p3']),
          }),
        )
        .next()
        .isDone();
    });

    it('buildingType filter', () => {
      const payload = {
        filters: {
          preemptionType: new Set(),
          buildingType: new Set(['Leilighet']),
          subAreaName: new Set(),
        },
      };

      testSaga(sagas.filterPreemptionsAsync, { payload })
        .next()
        .select(selectors.preemption.preemptionList)
        .next(preemptionList)
        .put(
          actions.setFilteredPreemptions({
            preemptions: new Set(['p1', 'p2']),
          }),
        )
        .next()
        .isDone();
    });

    it('subAreaName filter', () => {
      const payload = {
        filters: {
          preemptionType: new Set(),
          buildingType: new Set(),
          subAreaName: new Set(['Rogaland']),
        },
      };

      testSaga(sagas.filterPreemptionsAsync, { payload })
        .next()
        .select(selectors.preemption.preemptionList)
        .next(preemptionList)
        .put(
          actions.setFilteredPreemptions({
            preemptions: new Set(['p2', 'p3']),
          }),
        )
        .next()
        .isDone();
    });

    it('no filters', () => {
      testSaga(sagas.filterPreemptionsAsync, { payload: {} })
        .next()
        .select(selectors.preemption.preemptionList)
        .next(preemptionList)
        .put(
          actions.setFilteredPreemptions({
            preemptions: new Set(preemptionList.map(p => p.id)),
          }),
        )
        .next()
        .isDone();
    });
  });

  describe('sortPreemptions', () => {
    it('sort by totalPrice ascending', () => {
      const payload = {
        sorting: {
          field: 'totalPrice',
          order: SORT_ORDER_ASC,
          selector: p => p.pricing.totalPrice,
        },
      };

      testSaga(sagas.sortPreemptionsAsync, { payload })
        .next()
        .select(selectors.preemption.preemptionList)
        .next(preemptionList)
        .put(
          actions.setSortedPreemptions({
            preemptions: ['p2', 'p1', 'p3', 'p4'],
          }),
        )
        .next()
        .isDone();
    });

    it('sort by totalPrice descending', () => {
      const payload = {
        sorting: {
          field: 'totalPrice',
          order: SORT_ORDER_DESC,
          selector: p => p.pricing.totalPrice,
        },
      };

      testSaga(sagas.sortPreemptionsAsync, { payload })
        .next()
        .select(selectors.preemption.preemptionList)
        .next(preemptionList)
        .put(
          actions.setSortedPreemptions({
            preemptions: ['p3', 'p1', 'p2', 'p4'],
          }),
        )
        .next()
        .isDone();
    });

    it('no payload', () => {
      const sorting = {
        field: 'totalPrice',
        order: SORT_ORDER_ASC,
        selector: p => p.pricing.totalPrice,
      };
      testSaga(sagas.sortPreemptionsAsync, {})
        .next()
        .select(selectors.ui.apartments.activeSorting)
        .next(sorting)
        .select(selectors.preemption.preemptionList)
        .next(preemptionList)
        .put(
          actions.setSortedPreemptions({
            preemptions: ['p2', 'p1', 'p3', 'p4'],
          }),
        )
        .next()
        .isDone();
    });
  });

  describe('default', () => {
    it('succeeds', () => {
      const saga = testSaga(sagas.default);

      Array.from({ length: 4 }, saga.next);

      saga.next().isDone();
    });
  });
});
