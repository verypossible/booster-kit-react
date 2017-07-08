require('babel-register')
const webpackDevConfig = require('./webpack.development')
const webpackProdConfig = require('./webpack.production')

module.exports = function({ env }) {
  if (env === 'production') {
    return webpackProdConfig
  }

  return webpackDevConfig
}
