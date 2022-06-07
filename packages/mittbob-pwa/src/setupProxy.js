const proxy = require('http-proxy-middleware');
const path = require('path');

const envpath = path.join(__dirname, '..', '.env.development');
require('dotenv').config({ path: envpath });

module.exports = app => {
  app.use(
    '/dev-api',
    proxy({
      target: 'https://dev-api.bob.no',
      changeOrigin: true,
      pathRewrite: { '^/dev-api': '' },
    }),
  );
  app.use(
    '/azfuncs-local',
    proxy({
      target: 'http://localhost:7071',
      changeOrigin: true,
      pathRewrite: { '^/azfuncs-local': '' },
    }),
  );
  app.use(
    '/azfuncs',
    proxy({
      target: 'https://bob-d-weu-nodefunctions1-fna.azurewebsites.net/api',
      changeOrigin: true,
      pathRewrite: { '^/azfuncs': '' },
    }),
  );
};
