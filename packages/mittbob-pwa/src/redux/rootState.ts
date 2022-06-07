import { RouterState } from 'connected-react-router';
import auth0 from './modules/auth0/reducer';
import app from './modules/app/reducer';
import invoices from './modules/invoices/reducer';
import { State as UIState } from './modules/ui/state';
import person from './modules/person/reducer';
import preemption from './modules/preemption/reducer';
import umbraco from './modules/umbraco/reducer';
import featureFlags from './modules/featureFlags/reducer';
import resetUserPw from './modules/resetUserPw/reducer';
import thirdPartyInformation from './modules/thirdPartyInformation/reducer';

export interface RootState {
  router: RouterState;
  auth0: ReturnType<typeof auth0>;
  app: ReturnType<typeof app>;
  featureFlags: ReturnType<typeof featureFlags>;
  invoices: ReturnType<typeof invoices>;
  ui: UIState;
  person: ReturnType<typeof person>;
  preemption: ReturnType<typeof preemption>;
  umbraco: ReturnType<typeof umbraco>;
  resetUserPw: ReturnType<typeof resetUserPw>;
  thirdPartyInformation: ReturnType<typeof thirdPartyInformation>;
}
