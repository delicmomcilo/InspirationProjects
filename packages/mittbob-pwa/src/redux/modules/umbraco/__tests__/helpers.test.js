import {prependUmbracoUrlToRelativeUrlsInPlace} from '../helpers';
import testUmbracoJson from './testUmbracoPayload';
import { umbraco } from '../../../../config';

describe('modules/umbraco/reducer', () => {

  it(`should handle correct json`, () => {
    expect(testUmbracoJson._embedded.content[0].props.text.value).not.toEqual(expect.stringContaining('src=\"/media'))
    expect(testUmbracoJson._embedded.content[1].props.text.value).toEqual(expect.stringContaining('src=\"/media'))
    expect(testUmbracoJson._embedded.content[2].props.text.value).toEqual(expect.stringContaining('src=\"/media'))
    prependUmbracoUrlToRelativeUrlsInPlace(testUmbracoJson);
    expect(testUmbracoJson._embedded.content[1].props.text.value).toEqual(expect.stringContaining(`src=\"${umbraco.baseUrl}/media`))
    expect(testUmbracoJson._embedded.content[2].props.text.value).toEqual(expect.stringContaining(`src=\"${umbraco.baseUrl}/media`))
  });
});
