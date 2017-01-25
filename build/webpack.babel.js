require('babel-register')
module.exports = {
  config: require('./webpack.config'),
  loaders: require('./webpack.loaders'),
  plugins: require('./webpack.plugins'),
  styles: require('./webpack.styles')
}
