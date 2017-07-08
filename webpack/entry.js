import config from '../config'

const APP_ENTRY_PATHS = [
  'react-hot-loader/patch',
  '../src/index.tsx'
]

const hmrPaths = [`webpack-dev-server/client?${config.server_url}`,
'webpack/hot/only-dev-server']

const base = {
  vendor: [
    'babel-polyfill',
    'react',
    'react-redux',
    'react-router',
    'redux'
  ]
}

const development = {
  app: APP_ENTRY_PATHS.concat(hmrPaths)
}

const production = {
  app: APP_ENTRY_PATHS
}

export default {
  base,
  development,
  production
}
