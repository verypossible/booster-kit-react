import webpack from 'webpack'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import renderHtml from './html.config'

// ------------------------------------
// PostCSS
// ------------------------------------
import stylelint from 'stylelint'
import lost from 'lost'
import fontMagician from 'postcss-font-magician'
import cssNext from 'postcss-cssnext'
import cssReporter from 'postcss-reporter'
import cssBrowserReporter from 'postcss-browser-reporter'
import precss from 'precss'

import config from '../config'
import _debug from 'debug'

const debug = _debug('app:webpack:config')
const paths = config.utils_paths
const __DEV__ = config.globals.__DEV__
const __PROD__ = config.globals.__PROD__
const __TEST__ = config.globals.__TEST__

debug('Create configuration.')
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool,
  context: paths.client(),
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.sss', '.md'],
    modules: [paths.universal(), paths.client(), 'node_modules']
  },
  module: {}
}
// ------------------------------------
// Entry Points
// ------------------------------------
const APP_ENTRY_PATHS = [
  'react-hot-loader/patch',
  paths.client('index.js')
]

webpackConfig.entry = {
  app: __DEV__
    ? APP_ENTRY_PATHS.concat(`webpack-hot-middleware/client?path=${config.compiler_public_path}__webpack_hmr`)
    : APP_ENTRY_PATHS,
  vendor: config.compiler_vendor
}

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
  filename: `[name].[${config.compiler_hash_type}].js`,
  path: paths.dist(),
  publicPath: config.compiler_public_path
}

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals),
  new HtmlWebpackPlugin(renderHtml.index),
  new HtmlWebpackPlugin(renderHtml.twoHundred)
]

if (__DEV__) {
  debug('Enable plugins for live development (HMR, NoErrors).')
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BrowserSyncPlugin({
      open: config.browser_sync_open_window,
      host: config.server_host,
      port: config.browser_sync_port,
      proxy: config.compiler_public_path,
      ui: {
        port: config.browser_sync_ui_port
      }
    }, {
      reload: false
    })
  )
} else if (__PROD__) {
  debug('Enable plugins for production (OccurenceOrder, Dedupe & UglifyJS).')
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  )
}

// Don't split bundles during testing, since we only want import one bundle
if (!__TEST__) {
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  )
}

// ------------------------------------
// Loaders
// ------------------------------------
// JavaScript / JSON
webpackConfig.module.loaders = [{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel'
},
{
  test: /\.json$/,
  loader: 'json'
}]

// ------------------------------------
// Style Loaders
// ------------------------------------
if (__DEV__) {
  webpackConfig.module.loaders.push({
    test: /\.css$/,
    loaders: [
      'style-loader',
      { loader: 'css-loader', query: { modules: true } },
      { loader: 'postcss-loader' }
    ]
  })
} else {
  debug('Apply ExtractTextPlugin to CSS loaders.')
  webpackConfig.module.loaders.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: [
        { loader: 'css-loader', query: { modules: true } },
        { loader: 'postcss-loader' }
      ]
    })
  })
}

// ------------------------------------
// Style Configuration
// ------------------------------------
webpackConfig.postcss = function () {
  return [
    stylelint,
    precss,
    cssNext,
    lost,
    fontMagician({
      formats: 'local woff2 woff ttf eot svg otf'
    }),
    cssBrowserReporter,
    cssReporter
  ]
}

// File loaders
/* eslint-disable */
webpackConfig.module.loaders.push(
  { test: /\.md$/, loader: 'babel-loader!reactdown/webpack' },
  { test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
  { test: /\.otf(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
  { test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
  { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml', include: paths.universal('styles/fonts')},
  { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' },
)
/* eslint-enable */

// ------------------------------------
// Extract Text Plugin Configuration
// ------------------------------------
if (!__DEV__) {
  webpackConfig.plugins.push(
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    })
  )
}

export default webpackConfig
