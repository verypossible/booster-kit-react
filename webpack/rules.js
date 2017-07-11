import path from 'path'

export default [{
    test: /\.jsx?$/,
    use: ['babel-loader'],
    include: [
      path.resolve(__dirname, 'src')
    ],
    exclude: /node_modules/
  }, {
  test: /\.ts(x?)$/,
  use: ['awesome-typescript-loader']
} ,{
  enforce: 'pre',
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'source-map-loader'
}, {
  test: /\.(graphql|gql)$/,
  exclude: /node_modules/,
  loader: 'graphql-tag/loader',
}, {
  test: /\.json$/,
  loader: 'json-loader'
}, {
  test: /\.md(\?(.+))?$/,
  loader: path.join(__dirname, 'markdownLoader')
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
  include: path.resolve(__dirname, '../src'),
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
