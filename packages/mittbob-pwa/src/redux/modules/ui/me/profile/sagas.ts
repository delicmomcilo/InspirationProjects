import { put, takeLatest, select, take } from 'redux-saga/effects';
import { EDIT_PROFILE } from '../../confirmContactInfo/constants';
import { SAVE_PROFILE } from './constants';
import { setEdit, setErrors } from './actions';
import {
  PATCH_PERSON_FAILURE,
  PATCH_PERSON_SUCCESS,
} from '../../../person/constants';
import {
  watchUpdatePerson,
  patchConfiguration
} from '../../../person/actions';
import selectors from '../../../../selectors';
import { CONTACT_INFO_VERSION } from '../../confirmContactInfo/sagas';

export function* handleEditProfile() {
  yield put(setEdit({ edit: true }));
}

export function* handleSaveProfile() {
  const { changes } = yield select(selectors.ui.me.profile.get);
  yield put(watchUpdatePerson(changes));
  const personResponse = yield take([PATCH_PERSON_SUCCESS, PATCH_PERSON_FAILURE]);

  if (personResponse.type === PATCH_PERSON_SUCCESS) {
    yield put(
      patchConfiguration({
        op: 'add',
        path: '/infoPrompts/ConfirmContactInfo',
        value: `Version:${CONTACT_INFO_VERSION}_ISO:${new Date().toISOString()}`,
      }),
    );
  } else {
    yield put(setErrors({ errors: personResponse.payload?.error }));
  }
}

export default function*() {
  yield takeLatest(EDIT_PROFILE, handleEditProfile);
  yield takeLatest(SAVE_PROFILE, handleSaveProfile);
}
