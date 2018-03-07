import config from '../config'

const paths = config.utils_paths

export default {
  compress: true,
  contentBase: [paths.src()],
  port: config.server_port,
  historyApiFallback: true,
  hot: true,
  https: false,
  noInfo: false,
  overlay: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}
