import { testSaga } from 'redux-saga-test-plan';
import { advanceTo } from 'jest-date-mock';
import * as sagas from '../sagas';
import selectors from '../../../../../selectors';
import {
  patchConfiguration,
  watchUpdatePerson,
} from '../../../../person/actions';
import { setErrors } from '../actions';
import {
  PATCH_CONFIGURATION_FAILURE,
  PATCH_PERSON_FAILURE,
  PATCH_PERSON_SUCCESS,
} from '../../../../person/constants';

describe('modules/ui/me/profile/sagas', () => {
  advanceTo(new Date(2020, 3, 10, 0, 0, 0)); // reset to date time.

  const changes = {
    email: 'a.a@bob.no',
    mobile: '99887766'
  };

  it.each([
    { success: true },
    { success: false },
  ])('handleSaveProfile', ({ success }) => {
    const saga = testSaga(sagas.handleSaveProfile)
      .next()
      .select(selectors.ui.me.profile.get)
      .next({changes})
      .put(watchUpdatePerson({...changes}))
      .next()
      .take([PATCH_PERSON_SUCCESS, PATCH_PERSON_FAILURE])
      .next(success ? { type: PATCH_PERSON_SUCCESS } 
        : { type: PATCH_CONFIGURATION_FAILURE, payload: { error: 'Message'} })

    if (success) {
      saga
        .put(
          patchConfiguration({
            op: 'add',
            path: '/infoPrompts/ConfirmContactInfo',
            value: `Version:1_ISO:${new Date().toISOString()}`,
          }),
        )
        .next()
        .isDone();
    } else {
      saga
        .put(setErrors( {errors: 'Message' } ))
        .next()
        .isDone();
    } 
  });
});
