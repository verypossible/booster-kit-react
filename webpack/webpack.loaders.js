const config = require('../config')

const paths = config.utils_paths

module.exports = [{
  test: /\.ts(x?)$/,
  loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader']
} ,{
  enforce: 'pre',
  test: /\.js$/,
  loader: 'source-map-loader'
}, {
  test: /\.json$/,
  loader: 'json-loader'
}, {
  test: /\.md$/,
  use: [
    'babel-loader',
    'reactdown/webpack'
  ]
}, {
  test: /\.woff$/,
  loader: 'url-loader',
  query: {
    prefix: 'fonts/',
    name: '[path][name].[ext]',
    limit: 10000,
    mimetype: 'application/font-woff'
  }
}, {
  test: /\.woff2$/,
  loader: 'url-loader',
  query: {
    prefix: 'fonts/',
    name: '[path][name].[ext]',
    limit: 10000,
    mimetype: 'application/font-woff2'
  }
}, {
  test: /\.otf$/,
  loader: 'file-loader',
  query: {
    prefix: 'fonts/',
    name: '[path][name].[ext]',
    limit: 10000,
    mimetype: 'font/opentype'
  }
}, {
  test: /\.ttf$/,
  loader: 'url-loader',
  query: {
    prefix: 'fonts/',
    name: '[path][name].[ext]',
    limit: 10000,
    mimetype: 'application/octet-stream'
  }
}, {
  test: /\.eot$/,
  loader: 'file-loader',
  query: {
    prefix: 'fonts/',
    name: '[path][name].[ext]'
  }
}, {
  test: /\.svg$/,
  loader: 'url-loader',
  include: paths.src('universal/styles/fonts'),
  query: {
    prefix: 'fonts/',
    name: '[path][name].[ext]',
    limit: 10000,
    mimetype: 'image/svg+xml'
  }
}, {
  test: /\.(png|jpg|jpeg)$/,
  loader: 'url-loader',
  query: {
    limit: 8192
  }
}]
