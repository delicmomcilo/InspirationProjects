import { umbraco } from '../../../config';

const replaceKeys = ['src', 'url', 'value'];

const recursive = payload => {
  Object.keys(payload).forEach(key => {
    if (
      payload[key] &&
      typeof payload[key] === 'object' &&
      Object.keys(payload[key]).length > 0
    ) {
      recursive(payload[key]);
    }
    if (replaceKeys.indexOf(key) > -1) {
      if (payload[key].startsWith && payload[key].startsWith('/media')) {
        // eslint-disable-next-line no-param-reassign
        payload[key] = `${umbraco.baseUrl}${payload[key]}`;
      } else if (payload[key].includes && payload[key].includes('src="/')) {
        // eslint-disable-next-line no-param-reassign
        payload[key] = payload[key].replace(
          'src="/',
          `src="${umbraco.baseUrl}/`,
        );
      }
    }
  });
};

export const prependUmbracoUrlToRelativeUrlsInPlace = (json = {}) => {
  recursive(json);
};

export default prependUmbracoUrlToRelativeUrlsInPlace;
