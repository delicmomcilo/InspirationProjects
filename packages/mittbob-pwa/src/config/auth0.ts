import { env } from './helpers';

export default {
  domain: env.REACT_APP_AUTH0_DOMAIN,
  client_id: env.REACT_APP_AUTH0_CLIENT_ID,
  redirect_uri: `${window.location.origin}${env.REACT_APP_AUTH0_REDIRECT_URI || '/authcb'}`,
  useRefreshTokens: true,
  audience: env.REACT_APP_AUTH0_AUDIENCE,
} as const;