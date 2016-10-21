import ExtractTextPlugin from 'extract-text-webpack-plugin'
// import postcssPlugins from './webpack.postcss'
import config from '../config'

const CLIENT = config.compiler_options.client

const query = CLIENT ? { modules: true, importLoaders: 1 } : { modules: true, importLoaders: 1, locals: true }

const loaderOptions = [
  { loader: 'css-loader', query: query },
  { loader: 'postcss-loader'
    // pending new postcss-loader release - then remove loaderOptionsPlugin
    // options: {
    //   plugins: function () {
    //     return postcssPlugins
    //   }
    // }
  }
]

/* static
,
production: {
  test: /\.css$/,
  loaders: ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: [
      ...loaderOptions
    ]
  })
}
*/

const client = {
  test: /\.css$/,
  loaders: [
    'style-loader',
    ...loaderOptions
  ]
}

const server = {
  test: /\.css$/,
  loaders: ExtractTextPlugin.extract({
    loader: [
      ...loaderOptions
    ]
  })
}

const styleLoaders = { client, server }

export default styleLoaders
