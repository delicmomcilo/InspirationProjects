import { env } from './helpers';

const baseUrl = env.REACT_APP_UMBRACO_BASE_URL;
const publishedContentUrl = `${baseUrl}${env.REACT_APP_UMBRACO_PUBLISHED_CONTENT_PATH ||
  '/umbraco/rest/v1/publishedcontent'}`;

export default {
  baseUrl,
  publishedContentUrl,
  contactInfoId: env.REACT_APP_UMBRACO_CONTACT_INFO_ID,
  privacyDeclarationId: env.REACT_APP_UMBRACO_PRIVACY_DECLARATION_ID,
  memberConditionsId: env.REACT_APP_UMBRACO_MEMBER_CONDITIONS_ID,
  memberBenefitsId: env.REACT_APP_UMBRACO_MEMBER_BENEFITS_ID,
  preEmptionInfoId: env.REACT_APP_UMBRACO_PRE_EMPTION_INFO_ID,
  preemptionTermsId: env.REACT_APP_UMBRACO_PREEMPTION_TERMS_ID,
  faqId: env.REACT_APP_UMBRACO_FAQ_ID,
  termsAndConceptsId: env.REACT_APP_UMBRACO_TERMS_AND_CONCEPTS_ID,
  nonMemberBenefitsInfoId: env.REACT_APP_UMBRACO_NON_MEMBER_BENEFITS_INFO_ID,
  comingSoon: env.REACT_APP_UMBRACO_COMING_SOON_ID,
  welcomeTextId: env.REACT_APP_UMBRACO_WELCOME_TEXT_ID,
} as const;
