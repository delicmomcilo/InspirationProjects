export const GET = 'person/GET';
export const GET_FAILURE = 'person/GET_FAILURE';
export const GET_SUCCESS = 'person/GET_SUCCESS';

export const GET_SENIORITY = 'person/GET_SENIORITY';
export const GET_SENIORITY_FAILURE = 'person/GET_SENIORITY_FAILURE';
export const GET_SENIORITY_SUCCESS = 'person/GET_SENIORITY_SUCCESS';

export const PATCH_PERSON = 'person/PATCH_PERSON';
export const PATCH_PERSON_FAILURE = 'person/PATCH_PERSON_FAILURE';
export const PATCH_PERSON_SUCCESS = 'person/PATCH_PERSON_SUCCESS';

export const GET_CONFIGURATION = 'person/GET_CONFIGURATION';
export const GET_CONFIGURATION_FAILURE = 'person/GET_CONFIGURATION_FAILURE';
export const GET_CONFIGURATION_SUCCESS = 'person/GET_CONFIGURATION_SUCCESS';

export const PUT_CONFIGURATION = 'person/POST_CONFIGURATION';
export const PUT_CONFIGURATION_FAILURE = 'person/POST_CONFIGURATION_FAILURE';
export const PUT_CONFIGURATION_SUCCESS = 'person/POST_CONFIGURATION_SUCCESS';

export const PATCH_CONFIGURATION = 'person/PATCH_CONFIGURATION';
export const PATCH_CONFIGURATION_FAILURE = 'person/PATCH_CONFIGURATION_FAILURE';
export const PATCH_CONFIGURATION_SUCCESS = 'person/PATCH_CONFIGURATION_SUCCESS';

/**
 * Hårfagre roles
 */
export const HF_ROLES = {
  BOARD_PORTAL_USER: 'StyreportalBruker',
  MEMBER_PORTAL_USER: 'MedlemsportalBruker',
  OWNER_PORTAL_USER: 'EierPortalBruker',
  AUDITOR_PORTAL_USER: 'RevisorportalBruker',
  JANITOR_PORTAL_USER: 'VaktmesterportalBruker',
  ADVISOR_PORTAL_USER: 'SaksbehandlerportalBruker',
  PRE_EMPTION_USER: 'ForkjopsrettBruker',
  HARFAGRE_USER: 'Harfagrebruker',
  OWNS_APARTMENT: 'EierBolig',
  INVOICE_ATTEST: 'FakturaAttesterer',
  INVOICE_MAIN_APPROVER: 'FakturaHovedGodkjenner',
  INVOICE_APPROVER: 'FakturaGodkjenner',
};
