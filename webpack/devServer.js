import config from '../config'

export default {
  publicPath: `${config.server_url}/`,
  compress: true,
  port: config.server_port,
  historyApiFallback: true,
  hot: true,
  https: false,
  noInfo: false,
}
