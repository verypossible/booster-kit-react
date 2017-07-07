const config = require('../config')
const loaders = require('./webpack.loaders.js')

const paths = config.utils_paths

module.exports = {
  context: paths.src('client'),
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.css',
      '.ts',
      '.tsx',
      '.graphql',
      '.md'
    ],
    modules: [
      paths.src('universal'),
      'node_modules'
    ]
  },
  target: 'web'
  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-redux',
      'react-router',
      'redux'
    ]
  }
  output: {
    path: paths.build()
  }
  plugins:
  module: {
    rules:
  }
}
