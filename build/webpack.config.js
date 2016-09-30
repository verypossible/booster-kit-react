import configLoaders from './webpack.loaders'
import configPlugins from './webpack.plugins'
import configPostCSS from './webpack.postcss'
import configStyles from './webpack.styles'

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
webpackConfig.plugins = configPlugins.common

if (__DEV__) {
  debug('Enable plugins for live development (HMR, NoErrors).')
  const { hmr, noErrors, browserSync } = configPlugins
  webpackConfig.plugins.push(hmr, noErrors, browserSync)
}

if (__PROD__) {
  debug('Enable plugins for production (Dedupe & UglifyJS).')
  const { dedupe, uglify } = configPlugins
  webpackConfig.plugins.push(dedupe, uglify)
}

// Don't split bundles during testing, since we only want import one bundle
if (!__TEST__) {
  const { vendorCommons } = configPlugins
  webpackConfig.plugins.push(vendorCommons)
}

// ------------------------------------
// Loaders
// ------------------------------------
// JavaScript / JSON
webpackConfig.module.loaders = [{
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: paths.base(),
  exclude: /node_modules/
},
{
  test: /\.json$/,
  loader: 'json'
}]

// ------------------------------------
// Style Loaders
// ------------------------------------
if (__DEV__) {
  webpackConfig.module.loaders.push(configStyles.dev)
} else {
  debug('Apply ExtractTextPlugin to CSS loaders.')
  webpackConfig.module.loaders.push(configStyles.prod)
}

webpackConfig.postcss = function () {
  return configPostCSS
}

// File loaders
webpackConfig.module.loaders.push(configLoaders)

// ------------------------------------
// Extract Text Plugin Configuration
// ------------------------------------
if (!__DEV__) {
  webpackConfig.plugins.push(configStyles.extract)
}

export default webpackConfig
