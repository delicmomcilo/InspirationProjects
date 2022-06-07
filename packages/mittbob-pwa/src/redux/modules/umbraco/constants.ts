export const GET = 'umbraco/GET';
export const GET_SUCCESS = 'umbraco/GET_SUCCESS';
export const GET_FAILURE = 'umbraco/GET_FAILURE';

export const UMBRACO_COMING_SOON_PROPERTIES = {
  FIND_APARTMENT: 'Finn bolig',
  MY_APARTMENT: 'Min bolig',
  SAVED_SEARCH: 'Lagrede søk',
  MY_PRE_EMPTIONS: 'Mine meldte forkjøp',
  FAVORITES: 'Favoritter',
} as const;

export const UMBRACO_PROPERTIES = {
  CONTACT_INFO: 'contactInfo',
  PRIVACY_DECLARATION: 'privacyDeclaration',
  MEMBER_CONDITIONS: 'memberConditions',
  MEMBER_BENEFITS: 'memberBenefits',
  FAQ: 'faq',
  TERMS_AND_CONCEPTS: 'termsAndConcepts',
  PRE_EMPTION_INFO: 'preEmptionInfo',
  NOT_IMPLEMENTED_YET: 'notImplementedYet',
  NON_MEMBER_BENEFITS_INFO: 'nonMemberBenefitsInfo',
  COMING_SOON: 'comingSoon',
  WELCOME_TEXT: 'welcomeText',
  PREEMPTION_TERMS: 'preemptionTerms'
} as const;
