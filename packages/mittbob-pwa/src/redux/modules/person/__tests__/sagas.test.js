import { testSaga } from 'redux-saga-test-plan';
import * as sagas from '../sagas';
import * as actions from '../actions';
import { api } from '../../../../config';
import { get, patch, put } from '../../../request';
import selectors from '../../../selectors';
import { getSeniorityAsync , getPersonAsync} from '../sagas';
import { getPerson, patchPerson, patchPersonFailure } from '../actions';

describe('modules/person/sagas', () => {
  describe('getSeniority', () => {
    const nameId = '1234';
    const seniority = { seniorityDate: undefined, seniorityDays: 0 };
    const error = new Error('getSeniorityError');

    const args = { payload: {id: nameId}};

    it.each([true, false])('%o', success => {
      const saga = testSaga(sagas.getSeniorityAsync, args)
        .next()
        .call(get, { url: `${api.personBaseUrl}/person/${args.payload.id}/seniority` });

      if (success) saga.next({ json: seniority }).put(actions.getSenioritySuccess({ seniority }));
      else saga.throw(error).put(actions.getSeniorityFailure({ error }));

      saga.next().isDone();
    });
  });

  describe('getPerson', () => {
    const nameId = '1234';
    const person = { name: 'test', memberNumber: 123 };
    const error = new Error('getPersonError');

    it.each([true, false])('%o', success => {
      const saga = testSaga(sagas.getPersonAsync)
        .next()
        .put(getPerson())
        .next()
        .select(selectors.auth0.nameId)
        .next(nameId)
        .call(get, { url: `${api.personBaseUrl}/person/${nameId}` })
        .next({ json: person })
        .call(getSeniorityAsync, { type: 'AUTH0_GET_SENIORITY', payload: { id: nameId } });

      if (success) saga.next().put(actions.getPersonSuccess(person));
      else saga.throw(error).put(actions.getPersonFailure({ error }));

      saga.next().isDone();
    });
  });

  describe('patchPerson', () => {
    const nameId = '1234';
    const error = new Error('patchPersonError');

    it.each([
      { success: true, email: 'asda@asd.asd' },
      { success: false, mobile: '1234324' },
      { fail: true },
      { success: true, email: 'asda@asd.asd', mobile: '1234324' },
    ])('%o', ({ success, email, mobile, fail }) => {
      const json = 'if not ok';
      const operations = [];
      if (email) {
        operations.push({
          value: email,
          path: '/email',
          op: 'replace',
        });
      }

      if (mobile) {
        operations.push({
          value: mobile,
          path: '/mobile',
          op: 'replace',
        });
      }
      const saga = testSaga(sagas.patchPersonAsync, { payload: { email, mobile } })
        .next()
        .put(patchPerson())
        .next()
        .select(selectors.auth0.nameId)
        .next(nameId)
        .call(patch, { url: `${api.personBaseUrl}/person/${nameId}`, data: operations })
        .next({ json, response: { ok: success } });

      if (success)
        saga
          .put(actions.patchPersonSuccess())
          .next()
          .call(getPersonAsync);
      else if (fail) saga.put(actions.patchPersonFailure({ error: json }));
      else saga.throw(error).put(patchPersonFailure({ error }));

      saga.next().isDone();
    });
  });

  // describe('syncRoles', () => {
  //   const nameId = '1234';
  //   const error = new Error('syncRolesError');
  //   jest.spyOn(console, 'error').mockImplementationOnce(() => {});

  //   it.each([true, false])('%o', success => {
  //     const saga = testSaga(sagas.syncRolesAsync)
  //       .next()
  //       .select(selectors.auth.nameId)
  //       .next(nameId)
  //       .call(post, { url: `${api.personBaseUrl}/person/${nameId}/sync` });

  //     if (!success) saga.throw(error);

  //     saga.next().isDone();
  //   });
  // });

  describe('getConfiguration', () => {
    const auth0NameId = '431431';
    const configuration = { favoritePreemptions: ['preemption'] };
    const error = new Error('getConfigurationError');

    it.each([{ success: true }, { success: false }])(
      '%o',
      ({ success }) => {
        const saga = testSaga(sagas.getConfigurationAsync)
          .next()
          .select(selectors.auth0.nameId)
          .next(auth0NameId)
          .call(get, {
            url: `${api.personBaseUrl}/person/${auth0NameId}/userconfiguration`,
          });

        if (success)
          saga
            .next({ json: configuration })
            .put(actions.getConfigurationSuccess({ configuration }));
        else saga.throw(error).put(actions.getConfigurationFailure({ error }));

        saga.next().isDone();
      },
    );
  });

  describe('putConfiguration', () => {
    const configuration = {
      frontPageWidgets: ['string'],
      favoritePreemptions: ['string'],
      savedSearch: 'string',
    };
    const payload = { configuration };
    const auth0NameId = 'asdf.asdf.asdf.auth0';
    const error = new Error('postConfigurationError');

    it.each([{ success: true }, { success: false }])(
      '%o',
      ({ success }) => {
        const saga = testSaga(sagas.putConfigurationAsync, { payload })
          .next()
          .select(selectors.auth0.nameId)
          .next(auth0NameId)
          .call(put, {
            url: `${api.personBaseUrl}/person/${auth0NameId}/userconfiguration`,
            data: configuration,
          });

        if (success)
          saga
            .next({ json: configuration })
            .put(actions.putConfigurationSuccess({ configuration }));
        else saga.throw(error).put(actions.putConfigurationFailure({ error }));

        saga.next().isDone();
      },
    );
  });

  describe('patchConfiguration', () => {
    const payload = { op: 'patch', path: '/asdf' };
    const auth0NameId = 'asdf.asdf.asdf.auth0';
    const configuration = { favoritePreemptions: ['preemption'] };
    const error = new Error('patchConfigurationError');

    it.each([{ success: true }, { success: false }])(
      '%o',
      ({ success }) => {
         const saga = testSaga(sagas.patchConfigurationAsync, { payload })
          .next()
          .select(selectors.auth0.nameId)
          .next(auth0NameId)
          .call(patch, {
            url: `${api.personBaseUrl}/person/${auth0NameId}/userconfiguration`,
            data: payload,
          });

        if (success)
          saga
            .next({ json: configuration })
            .put(actions.patchConfigurationSuccess({ configuration }));
        else saga.throw(error).put(actions.patchConfigurationFailure({ error }));

        saga.next().isDone();
      },
    );
  });

  describe('default', () => {
    it('succeeds', () => {
      const saga = testSaga(sagas.default);

      Array.from({ length: 7 }, saga.next);

      saga.next().isDone();
    });
  });
});
