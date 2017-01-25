import config from '../config'

const paths = config.utils_paths

const options = {
  common: {
    context: paths.client(),
    resolve: {
      extensions: [
        '.js',
        '.jsx',
        '.json',
        '.css',
        '.sss',
        '.scss',
        '.graphql',
        '.md'
      ],
      modules: [
        paths.client(),
        paths.universal(),
        'node_modules'
      ]
    },
    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },
    target: 'web'
  },
  development: {
    devtool: 'eval'
  },
  production: {
    devtool: 'source-map'
  }
}

export default (ENV) => Object.assign({}, options.common, options[ENV])
