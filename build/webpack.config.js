import fileLoaders from './webpack.loaders'
import styleLoaders from './webpack.styles'
import webpackPlugins from './webpack.plugins'

import config from '../config'
import _debug from 'debug'

const debug = _debug('app:webpack:config')
const paths = config.utils_paths

debug('Create configuration.')
const webpackConfig = (options) => {
  const DEV = options.env === 'development'
  const ENV = options.env

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

  const output = {
    filename: `[name].[${config.compiler_hash_type}].js`,
    path: paths.dist(),
    publicPath: config.compiler_public_path
  }

  debug(`Configuring loaders for ${ENV}`)
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

  debug(`Configuring plugins for ${ENV}`)
  const plugins = webpackPlugins.common

  const totalPlugins = webpackPlugins[ENV].length
  const pluginsToPush = webpackPlugins[ENV].slice(1, totalPlugins)

  for (const plugin of pluginsToPush) {
    plugins.push(plugin)
  }

  debug(`Finalizing webpack configuration for ${ENV}`)
  return {
    devtool: config.compiler_devtool,
    target: config.compiler_target,
    context: paths.client(),
    resolve: {
      extensions: config.compiler_extensions,
      modules: [paths.universal(), paths.client(), 'node_modules']
    },
    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
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
