import { testSaga } from 'redux-saga-test-plan';
import { advanceTo } from 'jest-date-mock';
import * as sagas from '../sagas';
import selectors from '../../../../../selectors';
import { setLoading, setError, update } from '../actions';
import {
  GET_CONFIGURATION_FAILURE,
  GET_CONFIGURATION_SUCCESS,
  PATCH_CONFIGURATION_FAILURE,
  PATCH_CONFIGURATION_SUCCESS,
  PATCH_PERSON_FAILURE,
  PATCH_PERSON_SUCCESS,
} from '../../../../person/constants';
import { getConfiguration, watchUpdateCommunicationPreferences, watchUpdatePerson } from '../../../../person/actions';
import { take } from 'redux-saga/effects';

describe('modules/ui/preferencesAuth0/sagas', () => {
  advanceTo(new Date(2020, 3, 10, 0, 0, 0)); // reset to date time.

  it('init', () => {
    const person = {
      acceptElectronicCommunication: true,
      magazineCode: 'M',
    };
    const conf = { communicationPreferences: { acceptMembershipInformationByEmail: true } };

    testSaga(sagas.init)
      .next()
      .put(getConfiguration())
      .next()
      .take([GET_CONFIGURATION_SUCCESS, GET_CONFIGURATION_FAILURE])
      .next({ type: GET_CONFIGURATION_SUCCESS})
      .select(selectors.person.person)
      .next(person)
      .select(selectors.person.configuration)
      .next(conf)
      .put(update({ ...person, ...conf }))
      .next()
      .isDone();
  });

  it.each([
    { personSuccess: true, configSuccess: true },
    { personSuccess: false, configSuccess: true },
    { personSuccess: true, configSuccess: false },
    { personSuccess: false, configSuccess: false },
  ])('handleSave', ({ personSuccess, configSuccess}) => {
    const personChange = { magazineCode: 'M' };
    const configChange = { acceptMembershipInformationByPush: true}
    const saga = testSaga(sagas.handleSave)
      .next()
      .put(setLoading(true))
      .next()
      .select(selectors.ui.me.preferencesAuth0.changes)
      .next({...personChange, communicationPreferences: configChange})
      .put(watchUpdatePerson(personChange))
      .next()
      .put(watchUpdateCommunicationPreferences(configChange))
      .next()
      .all({
        personResponse: take([PATCH_PERSON_SUCCESS, PATCH_PERSON_FAILURE]),
        configResponse: take([PATCH_CONFIGURATION_SUCCESS, PATCH_CONFIGURATION_FAILURE]),
      });

    const response = {
      personResponse: { type: PATCH_PERSON_SUCCESS },
      configResponse: { type: PATCH_CONFIGURATION_SUCCESS },
    };

    if (!personSuccess) {
      response.personResponse.type = PATCH_PERSON_FAILURE;
      response.personResponse.payload = {error: 'PERSON_ERROR'}
    }
    if (!configSuccess) {
      response.configResponse.type = PATCH_CONFIGURATION_FAILURE
      response.configResponse.payload = {error:'CONFIG_ERROR'}

    }

    if (personSuccess && configSuccess) {
      saga
        .next(response)
        .put(setLoading(false))
        .next()
        .isDone();
    } else {
      saga
        .next(response)
        .put(setLoading(false))
        .next()
        .put(setError(response.personResponse?.payload?.error || response.configResponse?.payload?.error))
        .next()
        .isDone();
    }
  });

  describe('default', () => {
    it('succeeds', () => {
      const saga = testSaga(sagas.default);

      Array.from({ length: 5 }, saga.next);

      saga.next().isDone();
    });
  });
});
