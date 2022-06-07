import { Auth0Client } from '@auth0/auth0-spa-js';
import config from '../config';

let auth0: Auth0Client;
const getAuth0Client = (): Auth0Client => {
  if (auth0) return auth0;
  auth0 = new Auth0Client(config.auth0);
  return auth0;
};

export const getTokenSilently: Auth0Client['getTokenSilently'] = async options => {
  const client = await getAuth0Client();
  return client.getTokenSilently(options);
};

export const checkSession: Auth0Client['checkSession'] = async options => {
  const client = await getAuth0Client();
  return client.checkSession(options);
}

export const getUser: Auth0Client['getUser'] = async options => {
  const client = await getAuth0Client();
  const cl = await client.getIdTokenClaims();
  return client.getUser(options);
};
export const handleRedirectCallback: Auth0Client['handleRedirectCallback'] = async options => {
  const client = await getAuth0Client();
  return client.handleRedirectCallback(options);
};
export const loginWithRedirect: Auth0Client['loginWithRedirect'] = async options => {
  const client = await getAuth0Client();
  return client.loginWithRedirect(options);
};
export const logout: Auth0Client['logout'] = async options => {
  const client = await getAuth0Client();
  return client.logout(options);
};

export const isAuthenticated: Auth0Client['isAuthenticated'] = async () => {
  const client = await getAuth0Client();
  return client.isAuthenticated();
};
