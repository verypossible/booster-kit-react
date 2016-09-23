import webpack from 'webpack'
import path from 'path'

import config from '../config'

const paths = config.utils_paths
const BASE_CSS_LOADER = 'css?-minimize'

const cssModulesLoader = [
  BASE_CSS_LOADER,
  'modules',
  'importLoaders=1',
  'localIdentName=[name]__[local]___[hash:base64:5]'
].join('&')

export default {
  sass: {
    test: /\.scss$/,
    loaders: [
      'style',
      cssModulesLoader,
      'postcss',
      'sass?sourceMap'
    ]
  },
  css: {
    test: /\.css$/,
    loaders: [
      'style',
      cssModulesLoader,
      'postcss'
    ]
  },
  sss: {
    test: /\.sss$/,
    loaders: [
      'style',
      cssModulesLoader,
      'postcss',
      '?parser=sugarss'
    ]
  },
  sassOptions: new webpack.LoaderOptionsPlugin({
    options: {
      context: __dirname
    },
    sassLoader: {
      includePaths: path.join(paths.universal, 'styles')
    }
  })
}
