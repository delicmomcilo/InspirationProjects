import { nodefunctions1BaseUrl } from './api';
import { env } from './helpers';

export default {
  wellKnownEndpoint: env.REACT_APP_BANK_ID_WELL_KNOWN_ENDPOINT,
  exchangeUrl: `${nodefunctions1BaseUrl}/auth/bank-id/code-exchange`,
  clientId: env.REACT_APP_BANK_ID_CLIENT_ID,
  redirectUri: env.REACT_APP_BANK_ID_REDIRECT_URI ? env.REACT_APP_BANK_ID_REDIRECT_URI : `${window.location.origin}/bankidcb`,
};
