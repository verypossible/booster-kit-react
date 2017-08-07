import config from '../config'

const APP = '../src/index.tsx'
const HMR = 'react-hot-loader/patch'

const base = {
  vendor: [
    'babel-polyfill',
    HMR,
    'react',
    'react-redux',
    'react-router',
    'redux'
  ]
}

const development = {
  app: [HMR, `webpack-dev-server/client?${config.server_url}`,
  'webpack/hot/only-dev-server', APP]
}

const production = {
  app: [HMR, APP]
}

export default {
  base,
  development,
  production
}
