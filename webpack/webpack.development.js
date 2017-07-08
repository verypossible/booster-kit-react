import merge from 'webpack-merge'
import webpack from 'webpack'

import config from '../config'

import baseConfig from './webpack.base.js'
import devServer from './devServer'
import plugins from './plugins'
import entry from './entry'

const devConfig = {
  entry: entry.development,
  output: {
    filename: `[name].[hash].js`,
    publicPath: `${config.server_url}/`
  },
  devtool: 'source-map',
  devServer,
  plugins: plugins.development
}

export default merge(baseConfig, devConfig)
