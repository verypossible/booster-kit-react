import fileLoaders from './webpack.loaders'
import styleLoaders from './webpack.styles'
import webpackPlugins from './webpack.plugins'

import config from '../config'
import _debug from 'debug'

const debug = _debug('app:webpack:config')
const paths = config.utils_paths

debug('Create configuration.')
const webpackConfig = (options) => {
  // Env vars
  const DEV = options.env === 'development'
  const ENV = options.env

  // ------------------------------------
  // Entry
  // ------------------------------------
  const APP_ENTRY_PATHS = [
    'react-hot-loader/patch',
    paths.client('index.js')
  ]

  const entry = {
    app: DEV
      ? APP_ENTRY_PATHS.concat(`webpack-hot-middleware/client?path=${config.compiler_public_path}__webpack_hmr`)
      : APP_ENTRY_PATHS,
    vendor: config.compiler_vendor
  }

  // ------------------------------------
  // Output
  // ------------------------------------
  const output = {
    filename: `[name].[${config.compiler_hash_type}].js`,
    path: paths.dist(),
    publicPath: config.compiler_public_path
  }

  // ------------------------------------
  // Configure Rules (Loaders)
  // ------------------------------------
  const rules = [{
    test: /\.(js|jsx)$/,
    loader: 'babel',
    include: paths.base(),
    exclude: /node_modules/
  }, {
    test: /\.json$/,
    loader: 'json'
  }]

  rules.push(...fileLoaders)
  rules.push(styleLoaders[ENV])

  // ------------------------------------
  // Configure Plugins
  // ------------------------------------
  const plugins = webpackPlugins.common

  const totalPlugins = webpackPlugins[ENV].length
  const pluginsToPush = webpackPlugins[ENV].slice(1, totalPlugins)

  debug(`Loading configured plugins for ${ENV}`)
  for (const plugin of pluginsToPush) {
    plugins.push(plugin)
  }
  // ------------------------------------
  // Webpack Configuration
  // ------------------------------------
  return {
    devtool: config.compiler_devtool,
    target: config.compiler_target,
    context: paths.client(),
    resolve: {
      extensions: config.compiler_extensions,
      modules: [paths.universal(), paths.client(), 'node_modules']
    },
    entry: entry,
    output: output,
    plugins: plugins,
    module: {
      rules: rules
    }
  }
}

export default webpackConfig
