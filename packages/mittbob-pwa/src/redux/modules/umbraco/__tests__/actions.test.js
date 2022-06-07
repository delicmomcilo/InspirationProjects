import {
  GET,
  GET_SUCCESS,
  GET_FAILURE,
  UMBRACO_PROPERTIES,
} from '../constants';
import {
  get,
  getSuccess,
  getFailure,
  watchGetContactInfo,
  watchGetPrivacyDeclaration,
  watchGetMemberConditions,
  watchGetFAQ,
  watchGetTermsAndConcepts,
  watchGetPreEmptionInfo,
} from '../actions';
import { WATCH_GET } from '../sagaConstants';
import { umbraco } from '../../../../config';

describe('modules/umbraco/actions', () => {
  const umbracoJson = {
    some: 'json',
  };

  const testError = new Error('Test error');
  it('watchGetContactInfo', () => {
    expect(watchGetContactInfo()).toEqual({
      type: WATCH_GET,
      payload: {
        umbracoId: umbraco.contactInfoId,
        umbracoProperty: UMBRACO_PROPERTIES.CONTACT_INFO,
      },
    });
  });
  it('watchGetPrivacyDeclaration', () => {
    expect(watchGetPrivacyDeclaration()).toEqual({
      type: WATCH_GET,
      payload: {
        umbracoId: umbraco.privacyDeclarationId,
        umbracoProperty: UMBRACO_PROPERTIES.PRIVACY_DECLARATION,
      },
    });
  });
  it('watchGetMemberConditions', () => {
    expect(watchGetMemberConditions()).toEqual({
      type: WATCH_GET,
      payload: {
        umbracoId: umbraco.memberConditionsId,
        umbracoProperty: UMBRACO_PROPERTIES.MEMBER_CONDITIONS,
      },
    });
  });
  it('watchGetFAQ', () => {
    expect(watchGetFAQ()).toEqual({
      type: WATCH_GET,
      payload: {
        umbracoId: umbraco.faqId,
        umbracoProperty: UMBRACO_PROPERTIES.FAQ,
      },
    });
  });
  it('watchGetTermsAndConcepts', () => {
    expect(watchGetTermsAndConcepts()).toEqual({
      type: WATCH_GET,
      payload: {
        umbracoId: umbraco.termsAndConceptsId,
        umbracoProperty: UMBRACO_PROPERTIES.TERMS_AND_CONCEPTS,
      },
    });
  });
  it('watchGetPreEmptionInfo', () => {
    expect(watchGetPreEmptionInfo()).toEqual({
      type: WATCH_GET,
      payload: {
        umbracoId: umbraco.preEmptionInfoId,
        umbracoProperty: UMBRACO_PROPERTIES.PRE_EMPTION_INFO,
      },
    });
  });
  it('get', () => {
    expect(get()).toEqual({
      type: GET,
    });
  });

  it('getSuccess', () => {
    expect(
      getSuccess({
        umbracoId: umbraco.contactInfoId,
        umbracoProperty: UMBRACO_PROPERTIES.CONTACT_INFO,
        json: umbracoJson,
      }),
    ).toEqual({
      type: GET_SUCCESS,
      payload: {
        umbracoId: umbraco.contactInfoId,
        umbracoProperty: UMBRACO_PROPERTIES.CONTACT_INFO,
        json: umbracoJson,
      },
    });
  });
  it('getFailure', () => {
    expect(
      getFailure({
        error: testError,
        umbracoId: umbraco.contactInfoId,
        umbracoProperty: UMBRACO_PROPERTIES.CONTACT_INFO,
      }),
    ).toEqual({
      type: GET_FAILURE,
      payload: {
        error: testError,
        umbracoId: umbraco.contactInfoId,
        umbracoProperty: UMBRACO_PROPERTIES.CONTACT_INFO,
      },
    });
  });
});
