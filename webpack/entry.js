import config from '../config'

const SOURCE = '../src/index.tsx'

const HMR_PATCH = 'react-hot-loader/patch'

const vendor = [
  'babel-polyfill',
  'react',
  'react-redux',
  'react-router',
  'redux'
]


const development = {
  app: [HMR_PATCH, `webpack-dev-server/client?${config.server_url}`, 'webpack/hot/only-dev-server', SOURCE],
  vendor
}

const production = {
  app: [HMR_PATCH, SOURCE],
  vendor
}

const entry = {
  development,
  production
}

export default entry
