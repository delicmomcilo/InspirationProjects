import { testSaga } from 'redux-saga-test-plan';
import { advanceTo } from 'jest-date-mock';
import { take } from 'redux-saga/effects';
import * as sagas from '../sagas';
import selectors from '../../../../selectors';
import {
  getConfiguration,
  patchConfiguration,
  watchUpdateCommunicationPreferences,
  watchUpdatePerson,
} from '../../../person/actions';
import { show, initFailure, updateAuth0, setLoading, setError } from '../actions';
import { SIGN_IN_SUCCESS } from '../../../auth0/constants';
import {
  GET_CONFIGURATION_FAILURE,
  GET_CONFIGURATION_SUCCESS, PATCH_CONFIGURATION_FAILURE, PATCH_CONFIGURATION_SUCCESS,
  PATCH_PERSON_FAILURE,
  PATCH_PERSON_SUCCESS,
} from '../../../person/constants';

describe('modules/ui/onboarding/sagas', () => {
  advanceTo(new Date(2020, 3, 10, 0, 0, 0)); // reset to date time.

  it.each([{ getConfigFail: false }, { getConfigFail: true }])(
    'init',
    ({ getConfigFail }) => {
      const args = { type: SIGN_IN_SUCCESS };
      let saga = testSaga(sagas.init, args)
        .next()
        .put(getConfiguration());

      const person = {
        acceptElectronicCommunication: 1,
        magazineCode: 'M',
      };
      const config = {
        communicationPreferences: {
          acceptMembershipInformationByPush: true,
        },
      };
      saga = saga
        .next()
        .take([GET_CONFIGURATION_SUCCESS, GET_CONFIGURATION_FAILURE])
        .next(
          getConfigFail
            ? { type: GET_CONFIGURATION_FAILURE, payload: { error: 'error' } }
            : { type: GET_CONFIGURATION_SUCCESS },
        );
      if (getConfigFail) {
        saga.put(initFailure(new Error('error').toString()));
      } else {
        saga
          .select(selectors.person.person)
          .next(person)
          .select(selectors.person.configuration)
          .next(config)
          .put(updateAuth0({ ...person, ...config }));
      }
    },
  );

  it.each([true, false])('handleConfigurationSuccess', auth0 => {
    const nameIdAuth0 = 'nameauth0';
    testSaga(sagas.handleConfigurationSuccess)
      .next()
      .select(selectors.auth0.nameId)
      .next()
      .select(selectors.person.configuration)
      .next()
      .isDone();

    testSaga(sagas.handleConfigurationSuccess)
      .next()
      .select(selectors.auth0.nameId)
      .next(nameIdAuth0)
      .select(selectors.person.configuration)
      .next()
      .put(show(true));
  });

  it.each([
    { success: true },
    { success: false },
  ])('handleSave', ({ success }) => {
    const changesAuth0 = {
      magazineCode: 'M',
      communicationPreferences: {
        acceptMembershipInformationByPush: true,
      },
    };
    const saga = testSaga(sagas.handleSave)
      .next()
      .put(setLoading(true))
      .next()
      .select(selectors.ui.onboarding.changesAuth0)
      .next(changesAuth0)
      .put(watchUpdatePerson({ magazineCode: 'M' }))
      .next()
      .put(watchUpdateCommunicationPreferences({ acceptMembershipInformationByPush: true }))
      .next()
      .all({
        personResponse: take([PATCH_PERSON_SUCCESS, PATCH_PERSON_FAILURE]),
        configResponse: take([PATCH_CONFIGURATION_SUCCESS, PATCH_CONFIGURATION_FAILURE]),
      })
      .next(success ? {
        personResponse: { type: PATCH_PERSON_SUCCESS },
        configResponse: { type: PATCH_CONFIGURATION_SUCCESS }
      }: {
        personResponse: { type: PATCH_CONFIGURATION_FAILURE, payload: { error: 'Message'} },
        configResponse: { type: PATCH_CONFIGURATION_FAILURE }
      })

    if (success) {
      saga
        .put(
          patchConfiguration({
            op: 'add',
            path: '/infoPrompts/Onboarded',
            value: `Version:1_ISO:${new Date().toISOString()}`,
          }),
        )
        .next()
        .put(setLoading(false))
        .next()
        .put(show(false))
        .next()
        .isDone();
    } else {
      saga
        .put(setLoading(false))
        .next()
        .put(setError('Message'))
        .next()
        .isDone();
    } 
  });

  it('handleClose', () => {
    testSaga(sagas.handleClose)
      .next()
      .put(
        patchConfiguration({
          op: 'add',
          path: '/infoPrompts/Onboarded',
          value: `Version:1_ISO:${new Date().toISOString()}`,
        }),
      )
      .next()
      .isDone();
  });

  describe('default', () => {
    it('succeeds', () => {
      const saga = testSaga(sagas.default);

      Array.from({ length: 5 }, saga.next);

      saga.next().isDone();
    });
  });
});
