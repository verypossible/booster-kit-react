import fileLoaders from './webpack.loaders'
import styleLoaders from './webpack.styles'
import webpackPlugins from './webpack.plugins'
import webpackEntry from './webpack.entry'
import webpackOutput from './webpack.output'
import webpackOptions from './webpack.options'

import _debug from 'debug'
import config from '../config'

const debug = _debug('app:webpack:config')
const paths = config.utils_paths

const webpackConfig = (opts) => {
  const ENV = opts.env

  debug(`Initializing webpack configuration for ${ENV}`)
  const entry = webpackEntry(ENV)
  const output = webpackOutput(ENV)
  const options = webpackOptions(ENV)
  const plugins = webpackPlugins(ENV)
  const rules = [{
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    include: paths.base(),
    exclude: paths.base('node_modules')
  }]

  rules.push(...fileLoaders)
  rules.push(...styleLoaders[ENV])

  debug(`Finalizing webpack configuration for ${ENV}`)
  return {
    ...options,
    entry: entry,
    output: output,
    plugins: plugins,
    module: {
      rules: rules
    }
  }
}

export default webpackConfig
