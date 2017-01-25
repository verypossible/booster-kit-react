import config from '../config'

const paths = config.utils_paths

const APP_ENTRY_PATHS = [
  'react-hot-loader/patch',
  paths.client('index.js')
]

export default {
  common: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-redux',
      'react-router',
      'redux'
    ]
  },
  development: {
    app: APP_ENTRY_PATHS.concat(`webpack-hot-middleware/client?path=${config.server_url}/__webpack_hmr`)
  },
  production: {
    app: APP_ENTRY_PATHS
  }
}
