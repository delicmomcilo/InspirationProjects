import request, {
  get,
  del,
  upload,
  post,
  patch,
  unauthorizedGet,
  unauthorizedPatch,
  unauthorizedPost,
  download,
} from '../request';

const expectedDefaultHeaders = {
  'Content-Type': 'application/json',
};

describe('redux/request', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  const fakeUrl = 'http://fakeurl.fake';
  const fakeResponse = { data: 123 };
  const fakeBody = { aName: 'Names', aLastName: 'Jile', phone: '123456' };
  const fakeError = new Error('fake error message');
  const fakeTokens = {
    accessToken: 'header.payload.signature',
    idToken: 'fakeIdToken',
    idmDataStoreToken: 'fakeDataStoreToken',
  };
  const customHeaders = { 'x-custom-header': 'random' };

  it('should have default headers', () => {
    expect(request.headers).toEqual(expectedDefaultHeaders);
  });

  it('should expose methods', () => {
    expect(get).toBeDefined();
    expect(patch).toBeDefined();
    expect(post).toBeDefined();
  });

  describe('post', () => {
    it.each(['success', 'failure', 'success with json'])(
      'post should handle %s',
      async mode => {
        const custom = mode === 'success with json' && {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        if (mode.includes('success'))
          fetch.once(JSON.stringify(fakeResponse), custom);
        else fetch.mockReject(fakeError);
        if (mode === 'success with json') {
          const { json } = await post({ url: fakeUrl, data: fakeBody });
          expect(json).toEqual(fakeResponse);
        } else if (mode === 'success') {
          const { response, json } = await post({
            url: fakeUrl,
            data: fakeBody,
          });
          expect(response.status).toEqual(200);
          expect(json).toBeUndefined();
        } else {
          fetch.mockReject(fakeError);
          let failed;
          try {
            await post({ url: fakeUrl, data: fakeBody });
          } catch (e) {
            failed = true;
            expect(e).toEqual(fakeError);
          }
          expect(failed).toBeTruthy();
        }
      },
    );
  });

  describe('upload', () => {
    it.each(['success', 'failure', 'success with json'])(
      'post should handle %s',
      async mode => {
        const custom = mode === 'success with json' && {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        if (mode.includes('success'))
          fetch.once(JSON.stringify(fakeResponse), custom);
        else fetch.mockReject(fakeError);
        if (mode === 'success with json') {
          const { json } = await upload({ url: fakeUrl, data: fakeBody });
          expect(json).toEqual(fakeResponse);
        } else if (mode === 'success') {
          const { response, json } = await upload({
            url: fakeUrl,
            data: fakeBody,
          });
          expect(response.status).toEqual(200);
          expect(json).toBeUndefined();
        } else {
          fetch.mockReject(fakeError);
          let failed;
          try {
            await upload({ url: fakeUrl, data: fakeBody });
          } catch (e) {
            failed = true;
            expect(e).toEqual(fakeError);
          }
          expect(failed).toBeTruthy();
        }
      },
    );
  });

  describe('download', () => {
    global.URL.createObjectURL = jest.fn();
    it.each(['success', 'failure', 'success with json'])(
      'get should handle %s',
      async mode => {
        const custom = mode === 'success with json' && {
          headers: {
            'Content-Type': 'application/pdf',
          },
        };
        if (mode.includes('success'))
          fetch.once(JSON.stringify(undefined), custom);
        else fetch.mockReject(fakeError);
        if (mode === 'success with json') {
          const { json } = await download({ url: fakeUrl });
          expect(json.constructor.name === 'Blob').toBe(true);
        } else if (mode === 'success') {
          const { response, json } = await download({ url: fakeUrl });
          expect(response.status).toEqual(200);
          expect(json.constructor.name === 'Blob').toBe(true);
        } else {
          fetch.mockReject(fakeError);
          let failed;
          try {
            await download({ url: fakeUrl });
          } catch (e) {
            failed = true;
            expect(e).toEqual(fakeError);
          }
          expect(failed).toBeTruthy();
        }
      },
    );
  });

  describe('patch', () => {
    it.each(['success', 'failure', 'success with json'])(
      'should handle %s',
      async mode => {
        const custom = mode === 'success with json' && {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        if (mode.includes('success'))
          fetch.once(JSON.stringify(fakeResponse), custom);
        else fetch.mockReject(fakeError);
        if (mode === 'success with json') {
          const { json } = await patch({ url: fakeUrl, data: fakeBody });
          expect(json).toEqual(fakeResponse);
        } else if (mode === 'success') {
          const { response, json } = await patch({
            url: fakeUrl,
            data: fakeBody,
          });
          expect(response.status).toEqual(200);
          expect(json).toBeUndefined();
        } else {
          fetch.mockReject(fakeError);
          let failed;
          try {
            await patch({ url: fakeUrl, data: fakeBody });
          } catch (e) {
            failed = true;
            expect(e).toEqual(fakeError);
          }
          expect(failed).toBeTruthy();
        }
      },
    );
  });

  describe('get', () => {
    it.each(['success', 'failure', 'success with json'])(
      'should handle %s',
      async mode => {
        const custom = mode === 'success with json' && {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        if (mode.includes('success'))
          fetch.once(JSON.stringify(fakeResponse), custom);
        else fetch.mockReject(fakeError);
        if (mode === 'success with json') {
          const { json } = await get({ url: fakeUrl });
          expect(json).toEqual(fakeResponse);
        } else if (mode === 'success') {
          const { response, json } = await get({ url: fakeUrl });
          expect(response.status).toEqual(200);
          expect(json).toBeUndefined();
        } else {
          fetch.mockReject(fakeError);
          let failed;
          try {
            await get({ url: fakeUrl });
          } catch (e) {
            failed = true;
            expect(e).toEqual(fakeError);
          }
          expect(failed).toBeTruthy();
        }
      },
    );
  });

  describe('del', () => {
    it.each(['success', 'failure', 'success with json'])(
      'should handle %s',
      async mode => {
        const custom = mode === 'success with json' && {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        if (mode.includes('success'))
          fetch.once(JSON.stringify(fakeResponse), custom);
        else fetch.mockReject(fakeError);
        if (mode === 'success with json') {
          const { json } = await del({ url: fakeUrl });
          expect(json).toEqual(fakeResponse);
        } else if (mode === 'success') {
          const { response, json } = await del({ url: fakeUrl });
          expect(response.status).toEqual(200);
          expect(json).toBeUndefined();
        } else {
          fetch.mockReject(fakeError);
          let failed;
          try {
            await del({ url: fakeUrl });
          } catch (e) {
            failed = true;
            expect(e).toEqual(fakeError);
          }
          expect(failed).toBeTruthy();
        }
      },
    );
  });

  it.each(['with Authorization', 'without Authorization'])(
    'should use custom headers %s',
    async mode => {
      // if (mode === 'success') {
      fetch.once(JSON.stringify(fakeResponse));
      await get({ url: fakeUrl, headers: customHeaders });
      await post({ url: fakeUrl, headers: customHeaders, data: fakeBody });
      await patch({ url: fakeUrl, headers: customHeaders, data: fakeBody });
      expect(fetch.mock.calls[0][1].headers['x-custom-header']).toEqual(
        customHeaders['x-custom-header'],
      );
      expect(fetch.mock.calls[1][1].headers['x-custom-header']).toEqual(
        customHeaders['x-custom-header'],
      );
      expect(fetch.mock.calls[2][1].headers['x-custom-header']).toEqual(
        customHeaders['x-custom-header'],
      );
      if (mode === 'with Authorization') {
        /* Kan vi validere noe tokengreier for auth0???
        expect(fetch.mock.calls[0][1].headers.Authorization).toEqual(
          `Bearer ${fakeTokens.accessToken}`,
        );
        expect(fetch.mock.calls[1][1].headers.Authorization).toEqual(
          `Bearer ${fakeTokens.accessToken}`,
        );
        expect(fetch.mock.calls[2][1].headers.Authorization).toEqual(
          `Bearer ${fakeTokens.accessToken}`,
        );
        */
      }
    },
  );
  it.each(['GET', 'PATCH', 'POST'])(
    'should handle unauthorized %s',
    async mode => {
      if (mode === 'GET') await unauthorizedGet({ url: fakeUrl });
      else if (mode === 'POST')
        await unauthorizedPost({ url: fakeUrl, data: fakeBody });
      else if (mode === 'PATCH')
        await unauthorizedPatch({ url: fakeUrl, data: fakeBody });
      expect(fetch.mock.calls[0][1].headers.Authorization).toBeUndefined();
    },
  );
});
