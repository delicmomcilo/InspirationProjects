import { umbraco } from '../../../config';
import { GET, GET_FAILURE, GET_SUCCESS, UMBRACO_PROPERTIES } from './constants';
import { WATCH_GET } from './sagaConstants';
import { WatchGetPayload, WatchGetType, GetError, Success } from './types/actions.types';

export const get = () =>
  ({
    type: GET,
  } as const);

export const getSuccess = (payload: Success) =>
  ({
    type: GET_SUCCESS,
    payload,
  } as const);

export const getFailure = (payload: GetError) =>
  ({
    type: GET_FAILURE,
    payload,
  } as const);

export const watchGet = (payload: WatchGetPayload) =>
  ({
    type: WATCH_GET,
    payload,
  } as const);

export const watchGetMemberBenefits = (): WatchGetType =>
  watchGet({
    umbracoId: umbraco.memberBenefitsId,
    umbracoProperty: UMBRACO_PROPERTIES.MEMBER_BENEFITS,
  } as const);

export const watchGetContactInfo = (): WatchGetType =>
  watchGet({
    umbracoId: umbraco.contactInfoId,
    umbracoProperty: UMBRACO_PROPERTIES.CONTACT_INFO,
  } as const);

export const watchGetPrivacyDeclaration = (): WatchGetType =>
  watchGet({
    umbracoId: umbraco.privacyDeclarationId,
    umbracoProperty: UMBRACO_PROPERTIES.PRIVACY_DECLARATION,
  } as const);
export const watchGetMemberConditions = (): WatchGetType =>
  watchGet({
    umbracoId: umbraco.memberConditionsId,
    umbracoProperty: UMBRACO_PROPERTIES.MEMBER_CONDITIONS,
  } as const);

export const watchGetFAQ = (): WatchGetType =>
  watchGet({
    umbracoId: umbraco.faqId,
    umbracoProperty: UMBRACO_PROPERTIES.FAQ,
  } as const);
export const watchGetTermsAndConcepts = (): WatchGetType =>
  watchGet({
    umbracoId: umbraco.termsAndConceptsId,
    umbracoProperty: UMBRACO_PROPERTIES.TERMS_AND_CONCEPTS,
  } as const);

export const watchGetComingSoon = (): WatchGetType =>
  watchGet({
    umbracoId: umbraco.comingSoon,
    umbracoProperty: UMBRACO_PROPERTIES.COMING_SOON,
  } as const);

export const watchGetPreEmptionInfo = (): WatchGetType =>
  watchGet({
    umbracoId: umbraco.preEmptionInfoId,
    umbracoProperty: UMBRACO_PROPERTIES.PRE_EMPTION_INFO,
  } as const);

export const watchGetPreemptionTerms = (): WatchGetType =>
  watchGet({
    umbracoId: umbraco.preemptionTermsId,
    umbracoProperty: UMBRACO_PROPERTIES.PREEMPTION_TERMS,
    children: false,
  } as const);

export const watchGetWelcomeText = (): WatchGetType =>
  watchGet({
    umbracoId: umbraco.welcomeTextId,
    umbracoProperty: UMBRACO_PROPERTIES.WELCOME_TEXT,
    children: false,
  } as const);
