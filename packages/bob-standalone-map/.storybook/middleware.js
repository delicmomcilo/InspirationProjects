const { createProxyMiddleware } = require('http-proxy-middleware');



module.exports = function expressMiddleware (router) {
  router.use('/dev-api', createProxyMiddleware({
    target: 'https://dev-api.bob.no',
    changeOrigin: true,
    pathRewrite: {'^/dev-api' : ''}

  }))
}