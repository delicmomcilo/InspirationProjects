import {get as getCookie} from 'es-cookie';
import {
  AllowedMethods,
  DownloadConfig,
  MethodConfig,
  Queries,
  RequestHeaders,
  RequestResponse,
  UploadConfig,
} from './request/request.types';
import { getTokenSilently, logout } from '../clients/auth0';

export const createQuery = (queries: Queries): string => {
  const urlSearchParams = new URLSearchParams();
  const keys = Object.keys(queries);
  if (keys.length <= 0) return '';

  keys.forEach(k => {
    if (queries[k]) {
      urlSearchParams.append(k, queries[k] as string);
    }
  });

  return `?${urlSearchParams.toString()}`;
};

class Request {
  private readonly headers: RequestHeaders;

  private readonly getAccessToken: () => Promise<string>;

  private readonly auth0Logout: () => Promise<void>;

  constructor(getAccessTokenPromise: () => Promise<string>, auth0LogoutPromise: () => Promise<void>) {
    this.headers = {
      'Content-Type': 'application/json',
    };
    this.getAccessToken = getAccessTokenPromise;
    this.auth0Logout = auth0LogoutPromise;
  }

  private static async extractJson(res: Response): Promise<Response['json'] | undefined> {
    const ct = res.headers.get('content-type');
    const isJson = ct && ct.indexOf('application/json') > -1;
    if (isJson) return res.json();
    return undefined;
  }

  private createMethod(method: AllowedMethods, unauthorized = false) {
    return async ({
      url,
      data,
      headers: hs,
      removeContentTypeJson,
      blobReturnType,
      ...options
    }: MethodConfig): Promise<RequestResponse> => {
      const headers = { ...this.headers, ...hs };

      if (removeContentTypeJson || method === 'GET') {
        delete headers['Content-Type'];
      }

      if (!unauthorized) {
        try {
          const authCookie = getCookie('auth0.is.authenticated');
          // is auth0 authenticated cookie is not present the user is logged out 
          // in a different tab. forcing logout to remove access token.
          if(!authCookie) {
            await this.auth0Logout();
          }
          const accessToken = await this.getAccessToken();
          headers.Authorization = `Bearer ${accessToken}`;
        } catch (e) {
          console.error(e); // eslint-disable-line
        }
      }

      const body = data && JSON.stringify(data);
      const fetchOptions = {
        credentials: unauthorized ? 'omit' : 'include',
        method,
        body,
        headers,
        ...options,
      } as RequestInit;
      const response = await fetch(url, fetchOptions);
      // This if-section should probably be moved.
      if (blobReturnType) {
        const blobUrl = response.blob().then(myBlob => myBlob);
        return { response, json: await blobUrl };
      }
      const json = await Request.extractJson(response);

      if (response.status >= 500) {
        throw new Error(JSON.stringify({ response, json }));
      }
      return { response, json };
    };
  }

  get = this.createMethod('GET');

  put = this.createMethod('PUT');

  post = this.createMethod('POST');

  del = this.createMethod('DELETE');

  patch = this.createMethod('PATCH');

  upload = ({ data, ...options }: UploadConfig): Promise<RequestResponse> => {
    const { files, ...rest } = data;

    const formData = new FormData();
    if (files) {
      files.forEach(({ property, blob, name }) => {
        formData.append(property, blob, name);
      });
    }
    Object.keys(rest).forEach(k => {
      formData.append(k, rest[k]);
    });
    const opts = { body: formData };

    return this.post({ removeContentTypeJson: true, ...opts, ...options });
  };

  download = ({ ...options }: DownloadConfig): Promise<RequestResponse> => {
    return this.get({ removeContentTypeJson: true, blobReturnType: true, ...options });
  };

  unauthorizedGet = this.createMethod('GET', true);

  unauthorizedPost = this.createMethod('POST', true);

  unauthorizedPatch = this.createMethod('PATCH', true);
}
/* istanbul ignore next */
const getAccessToken = async (): Promise<string> => {
  return getTokenSilently();
};

/* istanbul ignore next */
const auth0Logout = async (): Promise<void> => {
  return logout();
};

const request = new Request(getAccessToken, auth0Logout);
export const {
  del,
  get,
  post,
  put,
  patch,
  unauthorizedGet,
  unauthorizedPost,
  unauthorizedPatch,
  upload,
  download,
} = request;

export default request;
