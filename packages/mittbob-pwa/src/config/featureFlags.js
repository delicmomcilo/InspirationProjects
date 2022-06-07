import { env } from './helpers';

export const AUTH0_FF_TOGGLE_LS_KEY = 'mittbobapp_feature_flag_auth0_enabled';

const parseToggle = json => {
  try {
    const f = JSON.parse(json);
    if (f.enabled && f.conditions?.client_filters?.length === 0) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

const findHome = parseToggle(env.REACT_APP_FF_FIND_HOME);
const onboardingDialog = parseToggle(env.REACT_APP_FF_ONBOARDING_DIALOG);
const vippsCheckout = parseToggle(env.REACT_APP_FF_VIPPS);
// const serviceWorker = parseToggle(env.REACT_APP_FF_SERVICE_WORKER);
const auth0 = parseToggle(env.REACT_APP_FF_AUTH0) || localStorage.getItem(AUTH0_FF_TOGGLE_LS_KEY);
const thirdPartyInformation = parseToggle(env.REACT_APP_FF_THIRD_PARTY_INFORMATION);

export default {
  findHome,
  serviceWorker: false, // hardcode when moving to new erp system and deprecating mitt.bob for invalidating cache.
  auth0,
  onboardingDialog,
  thirdPartyInformation,
  vippsCheckout,
};
