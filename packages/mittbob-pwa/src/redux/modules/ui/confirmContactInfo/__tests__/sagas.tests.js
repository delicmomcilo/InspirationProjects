import { testSaga } from 'redux-saga-test-plan';
import * as sagas from '../sagas';
import selectors from '../../../../selectors';
import { getConfiguration } from '../../../person/actions';
import { initFailure, show, updatePreferences } from '../actions';
import { GET_CONFIGURATION_SUCCESS, GET_CONFIGURATION_FAILURE} from '../../../person/constants';

import { SIGN_IN_SUCCESS } from '../../../auth0/constants';


jest.mock('../../../../../config/appConfig', () => {
  return { CONTACT_INFO_OUTDATED_DAYS: 180 };
});

describe('modules/ui/confirmcontactinfo/sagas', () => {
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
          .put(updatePreferences({ ...person, ...config }));
      }
    },
  );


  it.each([true, false])('handleConfigurationSuccess nameId not null', configurationFail => {
    const nameIdAuth0 = 'nameauth0';
    const todayString = new Date().toISOString();

    const saga = testSaga(sagas.handleConfigurationSuccess)
      .next()
      .select(selectors.auth0.nameId)
      .next(nameIdAuth0)
      .select(selectors.person.configuration)
      .next(configurationFail
        ? { infoPrompts: { confirmContactInfo: `Version:1_ISO:${todayString}` } }
        : { infoPrompts: { confirmContactInfo: "Version:1_ISO:2019-01-13T13:04:02.779Z" } });

      if (configurationFail) {
        saga.isDone();
      } else {
        saga.put(show(true));
      }
  });

  it('handleConfigurationSuccess nameId null', () => {
    testSaga(sagas.handleConfigurationSuccess)
      .next()
      .select(selectors.auth0.nameId)
      .next()
      .select(selectors.person.configuration)
      .next()
      .isDone();
  });

  it('handleAbort', () => {
    testSaga(sagas.handleAbort)
      .next()
      .select(selectors.auth0.nameId)
      .next().isDone();
  });
});