import { all } from 'redux-saga/effects';
import apartments from './apartments/sagas';
import benefits from './benefits/sagas';
import preemption from './preemption/sagas';
import onboarding from './onboarding/sagas';
import me from './me/sagas';
import confirmContactInfo from './confirmContactInfo/sagas';

export default function*() {
  yield all([apartments(), benefits(), me(), preemption(), onboarding(), confirmContactInfo()]);
}
