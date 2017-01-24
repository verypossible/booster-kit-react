import config from '../config'
const paths = config.utils_paths

const output = {
  common: {
    path: paths.dist()
  },
  development: {
    filename: `[name].[hash].js`,
    publicPath: `${config.server_url}/`
  },
  production: {
    filename: `[name].[chunkhash].js`,
    publicPath: '/'
  }
}

export default (ENV) => Object.assign({}, output.common, output[ENV])
