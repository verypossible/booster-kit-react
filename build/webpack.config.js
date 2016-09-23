import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpackPlugins from './webpack.plugins'
import postcssOptions from './webpack.postcss'
import webpackLoaders from './webpack.loaders'
import webpackStyles from './webpack.styles'

import config from '../config'
import _debug from 'debug'

const debug = _debug('app:webpack:config')
const paths = config.utils_paths
const { __DEV__, __PROD__, __TEST__ } = config.globals
const { sass, css, sss, sassOptions } = webpackStyles

debug('Create configuration.')
const webpackConfig = {
  name: 'client',
  target: 'web',
  context: path.resolve(__dirname, 'src'),
  devtool: config.compiler_devtool,
  resolve: {
    modules: [paths.client, paths.universal, paths.server, 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.sss', '.md'],
    descriptionFiles: ['package.json']
  },
  module: {}
}

const APP_ENTRY_PATHS = [
  path.join(paths.client, 'index.js')
]

webpackConfig.entry = {
  app: __DEV__
    ? APP_ENTRY_PATHS.concat(`webpack-hot-middleware/client?path=${config.compiler_public_path}__webpack_hmr`)
    : APP_ENTRY_PATHS,
  vendor: config.compiler_vendor
}

webpackConfig.output = {
  filename: `[name].[${config.compiler_hash_type}].js`,
  path: paths.dist,
  publicPath: config.compiler_public_path
}

// Plugins
const { common, dev, prod, optimize } = webpackPlugins
const { hmr, noErrors, browserSync } = dev
const { dedupe, uglify } = prod
const { vendorCommons } = optimize

webpackConfig.plugins = common

if (__DEV__) {
  debug('plugins:development')
  webpackConfig.plugins.push(hmr, noErrors, browserSync)
}

if (__PROD__) {
  debug('plugins:production')
  webpackConfig.plugins.push(dedupe, uglify)
}

if (!__TEST__) {
  debug('plugins:test')
  webpackConfig.plugins.push(vendorCommons)
}

// loaders
webpackConfig.module.rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loaders: ['react-hot-loader/patch', 'babel']
  },
  {
    test: /\.json$/,
    loader: 'json'
  }
]

webpackConfig.module.rules.push(...webpackLoaders)

// styles
webpackConfig.module.rules.push(sass, css, sss)
webpackConfig.plugins.push(sassOptions, postcssOptions)

// Production optimization
if (!__DEV__) {
  debug('Apply ExtractTextPlugin to CSS loaders.')
  webpackConfig.module.rules.filter((loader) =>
    loader.loaders && loader.loaders.find((name) => /css/.test(name.split('?')[0]))
  ).forEach((loader) => {
    const [first, ...rest] = loader.loaders
    loader.loader = ExtractTextPlugin.extract(first, rest.join('!'))
    Reflect.deleteProperty(loader, 'loaders')
  })

  webpackConfig.plugins.push(
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true
    })
  )
}

console.log(webpackConfig.plugins)
console.log(webpackConfig.module.rules)
export default webpackConfig
