import { combineReducers } from 'redux';
import apartments from './apartments/reducer';
import app from './app/reducer';
import auth from './auth/reducer';
import benefits from './benefits/reducer';
import invoices from './invoices/reducer';
import onboarding from './onboarding/reducer';
import me from './me';
import theme from './theme/reducer';
import resetUserPw from './resetUserPw/reducer';
import preemption from './preemption/reducer';
import confirmContactInfo from './confirmContactInfo/reducer';

export default combineReducers({
  apartments,
  app,
  auth,
  benefits,
  invoices,
  onboarding,
  me,
  theme,
  resetUserPw,
  preemption,
  confirmContactInfo,
});
