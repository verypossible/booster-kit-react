import path from 'path'

export default [{
  test: /\.tsx?$/,
  use: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
  exclude: path.resolve(__dirname, 'node_modules'),
  include: path.resolve(__dirname, '../src')
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
    exclude: /node_modules/,
    loader: 'svg-react-loader',
    query: {
        propsMap: {
            fillRule: 'fill-rule'
        },
        xmlnsTest: /^xmlns.*$/
    }
}, {
  test: /\.(png|jpg|jpeg)$/,
  loader: 'url-loader',
  query: {
    limit: 8192
  }
}]
