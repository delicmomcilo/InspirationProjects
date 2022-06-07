import { testSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import * as sagas from '../sagas';
import * as actions from '../actions';
import { api } from '../../../../config';
import { get, post, del, upload } from '../../../request';
import selectors from '../../../selectors';

describe('modules/preemption/sagas', () => {
  describe('getPreemptions', () => {
    const json = [{ id: 'p1' }, { id: 'p2' }, { id: 'p3' }];
    const preemptions = {
      p1: { id: 'p1' },
      p2: { id: 'p2' },
      p3: { id: 'p3' },
    };
    const error = 'getPreemptionsError';

    it.each([true, false])('%o', success => {
      const saga = testSaga(sagas.getPreemptionsAsync)
        .next()
        .call(get, { url: `${api.preemptionBaseUrl}/preemption` });

      if (success) saga.next({ json }).put(actions.getPreemptionsSuccess({ preemptions }));
      else saga.throw(error).put(actions.getPreemptionsFailure({ error }));

      saga.next().isDone();
    });
  });

  describe('getPreemption', () => {
    const payload = { id: 'p1' };
    const json = { id: 'p3' };
    const preemptions = {
      p3: { id: 'p3' },
    };
    const error = 'getPreemptionsError';

    it.each([true, false])('%o', success => {
      const saga = testSaga(sagas.getPreemptionAsync, { payload })
        .next()
        .call(get, {
          url: `${api.preemptionBaseUrl}/preemption/${payload.id}`,
        });

      if (success)
        saga
          .next({ json, response: { ok: true } })
          .put(actions.getPreemptionSuccess({ preemptions }));
      else saga.throw(error).put(actions.getPreemptionFailure({ error }));

      saga.next().isDone();
    });
  });

  describe('getMyPreemptions', () => {
    const auth0NameId = 'asdf.asdf.asdf.auth0';
    const json = [{ id: 'p2' }, { id: 'p3' }];
    const preemptions = {
      p2: { id: 'p2' },
      p3: { id: 'p3' },
    };
    const error = 'getMyPreemptionsError';

    it.each([{ success: true }, { success: false }])(
      '%o',
      ({ success }) => {
         const saga = testSaga(sagas.getMyPreemptionsAsync)
          .next()
          .select(selectors.auth0.nameId)
          .next(auth0NameId)
          .call(get, {
            url: `${api.preemptionBaseUrl}/person/${auth0NameId}/preemption`,
          });

        if (success) saga.next({ json }).put(actions.getMyPreemptionsSuccess({ preemptions }));
        else saga.throw(error).put(actions.getMyPreemptionsFailure({ error }));

        saga.next().isDone();
      },
    );
  });

  describe('getMyInterests', () => {
    const auth0NameId = 'asdf.asdf.asdf.auth0';
    const json = [
      { id: 'i2', preemptionId: 'p5' },
      { id: 'i3', preemptionId: 'p7' },
    ];
    const interests = {
      p5: { id: 'i2', preemptionId: 'p5' },
      p7: { id: 'i3', preemptionId: 'p7' },
    };
    const error = 'getMyInterestsError';

    it.each([{ success: true }, { success: false }])(
      '%o',
      ({ success }) => {
        const saga = testSaga(sagas.getMyInterestsAsync)
          .next()
          .select(selectors.auth0.nameId)
          .next(auth0NameId)
          .call(get, {
            url: `${api.preemptionBaseUrl}/person/${auth0NameId}/interest`,
          });

        if (success) saga.next({ json }).put(actions.getMyInterestsSuccess({ interests }));
        else saga.throw(error).put(actions.getMyInterestsFailure({ error }));

        saga.next().isDone();
      },
    );
  });

  describe('postInterest', () => {
    const auth0NameId = 'asdf.asdf.asdf.auth0';
    const payload = { id: 'p1', data: {} };
    const interests = {
      i1: { id: 'i1', preemptionId: 'p2' },
    };


    const error = new Error('postInterestError');

    it.each([{ success: true }, { success: false }])(
      '%o',
      ({ success }) => {
        const data = {
          InterestRequest: JSON.stringify({
            ClarificationType: 'managedadvanceclarification',
            NameId: auth0NameId,
            Comment: '',
          }),
        };
        const saga = testSaga(sagas.postInterestAsync, { payload })
          .next()
          .select(selectors.auth0.nameId)
          .next(auth0NameId)
          .inspect(fn => {
            // Anonymous function workaround on select
            expect(selectors.preemption.preemption('p1').toString()).toBe(
              fn.payload.selector.toString(),
            );
          })
          .next({ clarificationType: 'managedadvanceclarification' })
          .call(upload, {
            url: `${api.preemptionBaseUrl}/preemption/${payload.id}/interest`,
            data,
            headers: undefined,
          });

        if (success)
          saga
            .next({ json: interests, response: { ok: true } })
            .put(actions.postInterestSuccess({ interests }));
        else saga.throw(error).put(actions.postInterestFailure({ error: error.toString() }));

        saga.next().isDone();
      },
    );
  });

  describe('deleteInterest', () => {
    const payload = {
      id: 'p1',
      interestId: 'i1',
    };
    const deleteInterestResponse = {
      id: 'i1',
      preemptionId: 'p2',
      reason: 'reason',
    };
    const error = new Error('deleteInterestError');

    it.each([true, false])('%o', success => {
      const saga = testSaga(sagas.deleteInterestAsync, { payload })
        .next()
        .call(del, {
          url: `${api.preemptionBaseUrl}/preemption/${payload.id}/interest/${payload.interestId}`,
        });

      if (success)
        saga
          .next({ json: deleteInterestResponse, response: { ok: true } })
          .put(actions.deleteInterestSuccess(deleteInterestResponse.preemptionId));
      else saga.throw(error).put(actions.deleteInterestFailure({ id: 'p1', error }));

      saga.next().isDone();
    });
  });

  describe('getFilters', () => {
    const buildingType = [
      { id: '1', type: 'Leilighet' },
      { id: '2', type: 'Enebolig' },
    ];
    const areas = [
      {
        areaName: 'Ingen',
        subAreas: [
          { id: 1, areaName: 'Hordaland' },
          { id: 1, areaName: 'Rogaland' },
        ],
      },
    ];
    const filters = {
      buildingType: ['Leilighet', 'Enebolig'],
      subAreaName: ['Hordaland', 'Rogaland'],
    };
    const error = new Error('getFiltersError');

    it.each([true, false])('%o', success => {
      const saga = testSaga(sagas.getFiltersAsync)
        .next()
        .all([
          call(get, { url: `${api.preemptionBaseUrl}/preemption/filter/buildingtype` }),
          call(get, { url: `${api.preemptionBaseUrl}/preemption/filter/areas` }),
        ]);

      if (success)
        saga
          .next([{ json: buildingType }, { json: areas }])
          .put(actions.getFiltersSuccess({ filters }));
      else saga.throw(error).put(actions.getFiltersFailure({ error }));

      saga.next().isDone();
    });
  });

  describe('default', () => {
    it('succeeds', () => {
      const saga = testSaga(sagas.default);

      Array.from({ length: 7 }, saga.next);

      saga.next().isDone();
    });
  });
});
