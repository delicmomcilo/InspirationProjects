import apartments from './apartments/reducer';
import app from './app/reducer';
import auth from './auth/reducer';
import benefits from './benefits/reducer';
import onboarding from './onboarding/reducer';
import invoices from './invoices/reducer';
import me from './me';
import theme from './theme/reducer';
import resetUserPw from './resetUserPw/reducer';
import preemption from './preemption/reducer';
import confirmContactInfo from './confirmContactInfo/reducer';

export interface State {
  apartments: ReturnType<typeof apartments>;
  app: ReturnType<typeof app>;
  auth: ReturnType<typeof auth>;
  benefits: ReturnType<typeof benefits>;
  invoices: ReturnType<typeof invoices>;
  onboarding: ReturnType<typeof onboarding>;
  me: ReturnType<typeof me>;
  theme: ReturnType<typeof theme>;
  resetUserPw: ReturnType<typeof resetUserPw>;
  preemption: ReturnType<typeof preemption>;
  confirmContactInfo: ReturnType<typeof confirmContactInfo>;
}
