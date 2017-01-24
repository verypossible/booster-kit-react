import config from '../config'

const paths = config.utils_paths

export default [
  {
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
  },
  {
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
    include: paths.universal('styles/fonts'),
    query: {
      prefix: 'fonts/',
      name: '[path][name].[ext]',
      limit: 10000,
      mimetype: 'image/svg+xml'
    }
  }, {
    test: /\.(png|jpg)$/,
    loader: 'url-loader',
    query: {
      limit: 8192
    }
  }
]
