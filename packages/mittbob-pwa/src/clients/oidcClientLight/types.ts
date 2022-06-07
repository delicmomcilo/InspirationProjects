
export interface QueryStringMap {
  [key: string]: string;
}

export type Params = {
  grant_type: 'authorization_code';
  code: string;
  client_id: string;
  redirect_uri: string;
  code_verifier: string;
};

export interface Payload {
  access_token?: string
}

export interface Config {
  wellKnownEndpoint: string;
  token_endpoint?: string;
  userinfo_endpoint?: string;
  authorization_endpoint?: string;
  clientId: string;
  redirectUri: string;
  exchangeUrl: string;
  scope: string;
}


export interface ExchangeResponse {}
