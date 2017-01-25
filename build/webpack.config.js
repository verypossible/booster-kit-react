import loaders from './webpack.loaders'
import styles from './webpack.styles'
import plugins from './webpack.plugins'
import entry from './webpack.entry'
import output from './webpack.output'
import options from './webpack.options'

import _debug from 'debug'
import config from '../config'

const debug = _debug('app:webpack:config')
const paths = config.utils_paths
const ENV = config.env

const compiledOptions = Object.assign({}, options.common, options[ENV])
const compiledEntry = Object.assign({}, entry.common, entry[ENV])
const compiledOutput = Object.assign({}, output.common, output[ENV])
const compiledPlugins = [...plugins.common, ...plugins[ENV]]
const compiledRules = [{
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  include: paths.base(),
  exclude: paths.base('node_modules')
},
  ...loaders,
  ...styles[ENV]
]

debug(`Loading webpack configuration for ${ENV}`)
export default {
  ...compiledOptions,
  entry: compiledEntry,
  output: compiledOutput,
  plugins: compiledPlugins,
  module: {
    rules: compiledRules
  }
}
