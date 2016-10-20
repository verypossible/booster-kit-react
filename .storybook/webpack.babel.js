require('babel-register')
module.exports = {
  config: require('../build/webpack.config'),
  loaders: require('../build/webpack.loaders'),
  plugins: require('../build/webpack.plugins'),
  postcss: require('../build/webpack.postcss'),
  styles: require('../build/webpack.styles')
}
