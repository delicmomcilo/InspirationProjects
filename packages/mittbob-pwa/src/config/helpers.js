const { __UNSECURE_ENV__ } = window;
export const isDev =
  process.env.NODE_ENV === 'development' ||
  process.env.REACT_APP_IS_DEV;
export const isTest = process.env.NODE_ENV === 'test';
export const env = isDev || isTest ? process.env : __UNSECURE_ENV__;
export const isDevHosted = window.location.origin === 'https://dev-mitt.bob.no';
