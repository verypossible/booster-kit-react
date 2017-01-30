import config from '../config'

const paths = config.utils_paths

export default {
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
      ],
      alias: {
        colors: paths.universal('styles/colors.css'),
        text: paths.universal('styles/typography.css'),
        breakpoints: paths.universal('styles/breakpoints.css'),
        spacing: paths.universal('styles/spacing.css'),
        grid: paths.universal('styles/grid.css')
      }
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
