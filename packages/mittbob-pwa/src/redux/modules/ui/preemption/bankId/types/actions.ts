export type Error = {
  [key: string]: string;
};

export type Response = {
  access_token: string;
  id_token: string;
  expires_in: number;
  'not-before-policy': number;
  refresh_expires_in: number;
  scope: string;
  session_state: string;
  token_type: string;
  parsedIdToken: {
    birthdate: string;
    name: string
    given_name: string
    family_name: string
  };
};
