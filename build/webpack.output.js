import config from '../config'
const paths = config.utils_paths

export default {
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
