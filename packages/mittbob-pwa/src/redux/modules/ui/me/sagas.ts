import { all, Effect } from 'redux-saga/effects';
import preferencesAuth0 from './preferencesAuth0/sagas';
import profile from './profile/sagas';

export default function*(): Generator<Effect> {
  yield all([preferencesAuth0(), profile()]);
}
