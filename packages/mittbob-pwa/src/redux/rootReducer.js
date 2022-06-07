import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth0 from './modules/auth0/reducer';
import app from './modules/app/reducer';
import featureFlags from './modules/featureFlags/reducer';
import invoices from './modules/invoices/reducer';
import ui from './modules/ui/reducer';
import person from './modules/person/reducer';
import preemption from './modules/preemption/reducer';
import umbraco from './modules/umbraco/reducer';
import resetUserPw from './modules/resetUserPw/reducer';
import thirdPartyInformation from './modules/thirdPartyInformation/reducer';

export default history => combineReducers({
  router: connectRouter(history),
  app,
  auth0,
  featureFlags,
  invoices,
  umbraco,
  person,
  preemption,
  ui,
  resetUserPw,
  thirdPartyInformation,
});
