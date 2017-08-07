import config from '../config'

export default {
  compress: true,
  port: config.server_port,
  historyApiFallback: true,
  hot: true,
  https: false,
  noInfo: false,
}
