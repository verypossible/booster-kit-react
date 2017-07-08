import config from '../config'

const APP_ENTRY_PATHS = [
  'react-hot-loader/patch',
  `webpack-dev-server/client?${config.server_url}`,
  'webpack/hot/only-dev-server',
  '../src/index.tsx'
]

export default {
  vendor: [
    'babel-polyfill',
    'react',
    'react-redux',
    'react-router',
    'redux'
  ],
  app: APP_ENTRY_PATHS
}
