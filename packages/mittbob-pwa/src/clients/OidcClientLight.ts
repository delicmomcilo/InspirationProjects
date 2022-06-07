/* eslint-disable camelcase */
// Highly inspired by https://developer.okta.com/blog/2019/05/01/is-the-oauth-implicit-flow-dead

import { Config, ExchangeResponse, Params, Payload, QueryStringMap } from './oidcClientLight/types';

class OidcClientLight {
  config: Config;

  initializing: boolean;

  url: string | undefined;

  static MessageTypes = {
    SUCCESS: 'OidcClientLight-exchange-success',
    ERROR: 'OidcClientLight-exchange-error',
  };

  static PKCE_STATE_STORAGE_NAME = 'OidcClientLight-pkce_state';

  static PKCE_CODE_VERIFIER_STORAGE_NAME = 'OidcClientLight-pkce_code_verifier';

  static PKCE_NONCE_STORAGE_NAME = 'OidcClientLight-pkce_nonce';

  static parseQueryString(string = ''): QueryStringMap {
    const qs: QueryStringMap = {};
    const params = new URLSearchParams(string);
    params.forEach((val, key) => {
      qs[key] = val;
    });
    return qs;
  }

  static generateRandomString(): string {
    const array = new Uint32Array(28);
    window.crypto.getRandomValues(array);
    return Array.from(array, dec => `0${dec.toString(16)}`.substr(-2)).join('');
  }

  static sha256(plain: string): PromiseLike<ArrayBuffer> {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest('SHA-256', data);
  }

  static base64urlencode(str: ArrayBuffer): string {
    // Convert the ArrayBuffer to string using Uint8 array to convert to what btoa accepts.
    // btoa accepts chars only within ascii 0-255 and base64 encodes them.
    // Then convert the base64 encoded to base64url encoded
    //   (replace + with -, replace / with _, trim trailing =)
    const arr = (new Uint8Array(str) as unknown) as number[];
    return btoa(String.fromCharCode.apply(null, arr))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  static async pkceChallengeFromVerifier(v: string): Promise<string> {
    const hashed = await OidcClientLight.sha256(v);
    return OidcClientLight.base64urlencode(hashed);
  }

  static setCodeVerifier(): string {
    // Create and store a new PKCE code_verifier (the plaintext random secret)
    const code_verifier = OidcClientLight.generateRandomString();
    localStorage.setItem(OidcClientLight.PKCE_CODE_VERIFIER_STORAGE_NAME, code_verifier);
    return code_verifier;
  }

  static getCodeVerifier(): string {
    const ver = localStorage.getItem(OidcClientLight.PKCE_CODE_VERIFIER_STORAGE_NAME);
    if (!ver) throw new Error('[oidc-client-light] COuld not retrieve PKCE_CODE_VERIFIER');
    return ver;
  }

  static setState(): string {
    const state = OidcClientLight.generateRandomString();
    localStorage.setItem(OidcClientLight.PKCE_STATE_STORAGE_NAME, state);
    return state;
  }

  static getState(): string | null {
    return localStorage.getItem(OidcClientLight.PKCE_STATE_STORAGE_NAME);
  }

  static setNonce(): string {
    const nonce = OidcClientLight.generateRandomString();
    localStorage.setItem(OidcClientLight.PKCE_NONCE_STORAGE_NAME, nonce);
    return nonce;
  }

  static getNonce(): string | null {
    return localStorage.getItem(OidcClientLight.PKCE_NONCE_STORAGE_NAME);
  }

  static async postExchange(url: string, params: Params): Promise<ExchangeResponse> {
    const r = await fetch(url, {
      method: 'POST',
      body: Object.keys(params)
        .map((key): string => `${key}=${params[key as keyof Params]}`)
        .join('&'),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    });
    return r.json();
  }

  static postMessage = (type: string) => (payload: Payload | string) => {
    if (window.opener) {
      window.opener.postMessage({ type, payload }, '*');
    } else {
      throw new Error('Window opener not found. Cannot post message.');
    }
  };

  static postSuccessMessage = OidcClientLight.postMessage(OidcClientLight.MessageTypes.SUCCESS);

  static postErrorMessage = OidcClientLight.postMessage(OidcClientLight.MessageTypes.ERROR);

  static checkEqualStates(state: string): void {
    if (localStorage.getItem(OidcClientLight.PKCE_STATE_STORAGE_NAME) !== state) {
      throw new Error('Invalid state.');
    }
  }

  static cleanup(): void {
    // Clean these up since we don't need them anymore
    localStorage.removeItem(OidcClientLight.PKCE_STATE_STORAGE_NAME);
    localStorage.removeItem(OidcClientLight.PKCE_CODE_VERIFIER_STORAGE_NAME);
  }

  constructor(config: Config) {
    this.config = config;
    this.initializing = true;
    this.init();
  }

  init(): void {
    this.getWellKnown().catch(e => console.error(e));
  }

  async getWellKnown(): Promise<void> {
    try {
      const { authorization_endpoint, token_endpoint, userinfo_endpoint } = await fetch(
        this.config.wellKnownEndpoint,
      )
        .then(r => r.json())
        .catch(e => console.error(e));
      this.config.authorization_endpoint = authorization_endpoint;
      this.config.token_endpoint = token_endpoint;
      this.config.userinfo_endpoint = userinfo_endpoint;
      this.initializing = false;
    } catch (e) {
      console.error(e);
    }
  }

  async waitForInit(): Promise<Error | void> {
    return new Promise((res, rej) => {
      const MAX_TRIES = 20;
      const check = (tries = 0): void => {
        if (!this.initializing) res();
        else if (tries > MAX_TRIES) rej(new Error('Timeout waiting for init.'));
        else setTimeout(() => check(tries + 1), 250);
      };
      check();
    });
  }

  async exchange(): Promise<void> {
    const q = OidcClientLight.parseQueryString(window.location.search);
    // Check if the server returned an error string
    if (q.error) {
      throw new Error(q.error);
    }
    // If the server returned an authorization code, attempt to exchange it for an access token
    if (!q.code) throw new Error('Missing code');
    // Verify state matches what we set at the beginning
    OidcClientLight.checkEqualStates(q.state);
    const { clientId, redirectUri, exchangeUrl } = this.config;
    // Exchange the authorization code for an access token
    try {
      const json = await OidcClientLight.postExchange(exchangeUrl, {
        grant_type: 'authorization_code',
        code: q.code,
        client_id: clientId,
        redirect_uri: redirectUri,
        code_verifier: OidcClientLight.getCodeVerifier(),
      });
      if (json) {
        OidcClientLight.postSuccessMessage(json);
      } else {
        OidcClientLight.postErrorMessage('Could not retrieve JSON from exchange.');
      }
    } catch (e) {
      OidcClientLight.postErrorMessage(e);
    } finally {
      OidcClientLight.cleanup();
    }
  }

  setAuthorizationUrl(state: string, code_challenge: string, nonce: string): void {
    const { authorization_endpoint, clientId, scope, redirectUri } = this.config;
    const url = `${authorization_endpoint}?response_type=code&client_id=${encodeURIComponent(
      clientId,
    )}&state=${encodeURIComponent(state)}&scope=${encodeURIComponent(
      scope,
    )}&redirect_uri=${encodeURIComponent(redirectUri)}&code_challenge=${encodeURIComponent(
      code_challenge,
    )}&code_challenge_method=S256&nonce=${encodeURIComponent(nonce)}`;

    this.url = url;
  }

  callback(): Promise<void> {
    return this.exchange();
  }
  /*
  async getUserinfo(): Promise<Error | Userinfo> {
    if (!this.config.userinfo_endpoint)
      throw new Error('[oidc-client-light] Userinfo endpoint does not exist');
    if (!this.response?.access_token) throw new Error('[oidc-client-light] Access token missing');

    const json = await fetch(this.config.userinfo_endpoint, {
      headers: {
        Authorization: `Bearer ${this.response.access_token}`,
        Accept: 'application/json',
      },
    }).then(r => r.json());
    return json
  }*/

  async prepare(): Promise<boolean> {
    await this.waitForInit();
    const state = OidcClientLight.setState();
    const code_verifier = OidcClientLight.setCodeVerifier();
    const code_challenge = await OidcClientLight.pkceChallengeFromVerifier(code_verifier);
    const nonce = OidcClientLight.setNonce();
    this.setAuthorizationUrl(state, code_challenge, nonce);
    return true;
  }

  async authenticate(): Promise<Payload> {
    window.open(this.url);
    return new Promise((res, rej) => {
      window.addEventListener(
        'message',
        e => {
          try {
            const { type, payload } = e.data;
            if (type === OidcClientLight.MessageTypes.SUCCESS) {
              res(payload);
            } else if (type === OidcClientLight.MessageTypes.ERROR) {
              rej(payload);
            }
          } catch (err) {
            rej(err);
          }
        },
        false,
      );
    });
  }
}

export default OidcClientLight;
