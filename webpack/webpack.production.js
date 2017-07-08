import merge from 'webpack-merge'
import webpack from 'webpack'

import config from '../config'

import baseConfig from './webpack.base'
import plugins from './plugins'

const productionConfig = {
  output: {
    filename: `[name].[chunkhash].js`,
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: plugins.produciton
}

export default merge(baseConfig, productionConfig)
