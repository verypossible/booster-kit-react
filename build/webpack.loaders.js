import path from 'path'
import config from '../config'

const paths = config.utils_paths

export default [
  {
    test: /\.md$/,
    loader: 'babel-loader!reactdown/webpack'
  }, {
    test: /\.woff(\?.*)?$/,
    loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
  }, {
    test: /\.otf(\?.*)?$/,
    loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
  }, {
    test: /\.ttf(\?.*)?$/,
    loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
  }, {
    test: /\.eot(\?.*)?$/,
    loader: 'file?prefix=fonts/&name=[path][name].[ext]'
  }, {
    test: /\.svg(\?.*)?$/,
    loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml',
    include: path.join(paths.universal, 'styles/fonts')
  }, {
    test: /\.(png|jpg)$/,
    loader: 'url?limit=8192'
  }
]