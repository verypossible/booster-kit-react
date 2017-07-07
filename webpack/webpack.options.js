import config from '../config'

const paths = config.utils_paths

export default {
  common: {
    context: paths.src('client'),
    resolve: {
      extensions: [
        '.js',
        '.jsx',
        '.json',
        '.css',
        '.ts',
        '.tsx',
        '.graphql',
        '.md'
      ],
      modules: [
        paths.src('universal'),
        'node_modules'
      ]
    },
    target: 'web'
  },
  development: {
    devtool: 'source-map',
    devServer: {
      publicPath: `${config.server_url}/`,
      compress: true,
      port: config.server_port,
      historyApiFallback: true,
      hot: true,
      https: false,
      noInfo: true,
    }
  },
  production: {
    devtool: 'source-map'
  }
}
