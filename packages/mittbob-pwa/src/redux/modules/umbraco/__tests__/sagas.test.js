import { testSaga } from 'redux-saga-test-plan';
import { getAsync } from '../sagas';
import { get, getFailure, getSuccess } from '../actions';
import { umbraco } from '../../../../config';
import { unauthorizedGet as getRequest } from '../../../request';
import { UMBRACO_PROPERTIES } from '../constants';
import { prependUmbracoUrlToRelativeUrlsInPlace } from '../helpers';

describe('modules/umbraco/sagas', () => {
  const error = new Error('I am an error');
  const umbracoJson = {
    some: 'json',
  };
  it.each([{ success: true }, { success: false }])('getAsync', ({ success }) => {
    const saga = testSaga(getAsync, {
      payload: {
        umbracoId: umbraco.contactInfoId,
        umbracoProperty: UMBRACO_PROPERTIES.CONTACT_INFO,
      },
    })
      .next()
      .put(get())
      .next()
      .call(
        { context: getRequest, fn: getRequest },
        {
          url: `${umbraco.publishedContentUrl}/${umbraco.contactInfoId}/children`,
          headers: undefined,
          data: undefined,
          removeContentTypeJson: undefined,
        },
      );

    if (success)
      saga
        .next({ json: umbracoJson })
        .call(prependUmbracoUrlToRelativeUrlsInPlace, umbracoJson)
        .next()
        .put(
          getSuccess({
            json: umbracoJson,
            umbracoProperty: UMBRACO_PROPERTIES.CONTACT_INFO,
            umbracoId: umbraco.contactInfoId,
          }),
        );
    else
      saga
        .throw(error)
        .put(
          getFailure({
            error: error.toString(),
            umbracoId: umbraco.contactInfoId,
            umbracoProperty: UMBRACO_PROPERTIES.CONTACT_INFO,
          }),
        );
    saga.next().isDone();
  });
});
