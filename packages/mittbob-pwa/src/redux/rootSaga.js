import { all, call, actionChannel, flush, put, select } from 'redux-saga/effects';
import { SAGA_ACTION } from '@redux-saga/symbols';
import app from './modules/app/sagas';
import auth0, { initialSignIn } from './modules/auth0/sagas';
import featureFlags from './modules/featureFlags/sagas';
import thirdPartyInformation from './modules/thirdPartyInformation/sagas';
import invoices from './modules/invoices/sagas';
import person from './modules/person/sagas';
import preemption from './modules/preemption/sagas';
import resetUserPw from './modules/resetUserPw/sagas';
import ui from './modules/ui/sagas';
import umbraco from './modules/umbraco/sagas';

function* release(buffer) {
  // Release all queued actions
  const bufferedActions = yield flush(buffer);
  for (const action of bufferedActions) {
    // if (!action[SAGA_ACTION]) {
      yield put(action);
    // }
  }
}

export default function* rootSaga() {
  // Queue all actions until the saga is done
  const buffer = yield actionChannel('*');

    yield call(initialSignIn)
  // Try to get a logged in user as the first thing that happens on app start
  yield all([
    auth0(),
    app(),
    featureFlags(),
    thirdPartyInformation(),
    invoices(),
    person(),
    preemption(),
    ui(),
    umbraco(),
    resetUserPw(),
    release(buffer),
  ]);
}
