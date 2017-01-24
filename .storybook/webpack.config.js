const path = require('path')

const webpack = require('../build/webpack.babel')
const appConfig = require('../config/index').default
const postcss = require('../postcss.config')
const genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

const webpackConfig = webpack.config.default
const loaders = webpack.loaders.default

const UNIVERSAL = path.resolve(__dirname, '../universal')
const CLIENT = path.resolve(__dirname, '../client')
const NODE_MODULES = path.resolve(__dirname, 'node_modules')

const env = appConfig.env

module.exports = function(config, env) {
  var config = genDefaultConfig(config, env)

  // Extend it as you need.
  config.context = UNIVERSAL
  config.resolve = {
    root: UNIVERSAL,
    extensions: [...appConfig.compiler_extensions, ''],
    moduleDirectories: [UNIVERSAL, NODE_MODULES]
  }

  config.module.loaders = [
    {
      test: /\.(js|jsx)$/,
      loader: 'babel',
      include: path.resolve(__dirname, '../'),
      exclude: /node_modules/
    },
    {
      test: /\.json$/,
      loader: 'json',
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.css$/,
      loaders: [ 'style', 'css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'],
      include: path.resolve(__dirname, '../')
    }
  ]

  config.module.loaders.push(...loaders)

  config.postcss = function () {
      return postcss.plugins
    }

  return config
}
