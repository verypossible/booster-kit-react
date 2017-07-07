const config = require('../config')

const paths = config.utils_paths

const APP_ENTRY_PATHS = [
  'react-hot-loader/patch',
  paths.src('client/index.tsx')
]

module.exports.base = {
  vendor: [
    'babel-polyfill',
    'react',
    'react-redux',
    'react-router',
    'redux'
  ]
}

module.exports.development = {
  app: APP_ENTRY_PATHS.concat(`webpack-hot-middleware/client?path=${config.server_url}/__webpack_hmr`)
}

module.exports.production = {
    app: APP_ENTRY_PATHS
  }
}
