import merge from 'webpack-merge'
import webpack from 'webpack'

import config from '../config'

import baseConfig from './webpack.base'
import plugins from './plugins'
import entry from './entry'
import styles from './styles'

const productionConfig = {
  entry: entry.production,
  output: {
    chunkFilename: `[name].[hash].js`,
    filename: `[name].[hash].js`,
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: plugins.produciton,
  module: {
    rules: styles.production
  }
}

export default merge(baseConfig, productionConfig)
