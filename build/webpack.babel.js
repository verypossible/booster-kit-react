require('babel-register')
module.exports = {
  config: require('./webpack.config'),
  loaders: require('./webpack.loaders'),
  plugins: require('./webpack.plugins'),
  postcss: require('./webpack.postcss'),
  styles: require('./webpack.styles')
}
