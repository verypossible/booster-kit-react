import fileLoaders from './webpack.loaders'
import styleLoaders from './webpack.styles'
import webpackPlugins from './webpack.plugins'

import config from '../config'
import _debug from 'debug'

const debug = _debug('app:webpack:config')
const paths = config.utils_paths
const clientInclude = [paths.client(), paths.universal()]
const serverInclude = [paths.server(), paths.universal()]

debug('Create configuration.')
const webpackConfig = (options) => {
  const ENV = options.env
  const DEV = ENV === 'development'
  const CLIENT = options.client
  const SERVER = options.server

  const APP_ENTRY_PATHS = [
    'react-hot-loader/patch',
    paths.client('index.js')
  ]

  const clientEntry = {
    app: DEV
      ? APP_ENTRY_PATHS.concat(`webpack-hot-middleware/client?path=${config.compiler_public_path}__webpack_hmr`)
      : APP_ENTRY_PATHS,
    vendor: config.compiler_vendor
  }

  const serverEntry = {
    prerender: paths.universal('routes')
  }

  const output = {
    filename: DEV ? 'app.js' : `[name].[${config.compiler_hash_type}].js`,
    chunkFilename: `[name].[${config.compiler_hash_type}].js`,
    path: paths.dist(),
    publicPath: config.compiler_public_path
  }

  debug(`Configuring loaders for ${ENV}`)
  const rules = [{
    test: /\.(js|jsx)$/,
    loader: 'babel',
    include: CLIENT ? clientInclude : serverInclude,
    exclude: paths.base('node_modules')
  }]

  rules.push(...fileLoaders)

  debug(`Configuring styles for ${ENV} & client is ${CLIENT}`)
  CLIENT && rules.push(styleLoaders.client)
  SERVER && rules.push(styleLoaders.server)

  debug(`Configuring plugins for ${ENV}`)
  const plugins = webpackPlugins.common

  CLIENT && plugins.push(...webpackPlugins[ENV])
  SERVER && plugins.push(...webpackPlugins.server)

  debug(`Finalizing webpack configuration for ${ENV}`)
  return {
    devtool: config.compiler_devtool,
    target: SERVER ? 'node' : 'web',
    resolve: {
      extensions: config.compiler_extensions,
      modules: [paths.client(), paths.server(), paths.universal(), 'node_modules']
    },
    entry: CLIENT ? clientEntry : serverEntry,
    output: output,
    plugins: plugins,
    module: {
      rules: rules
    }
  }
}

export default webpackConfig
