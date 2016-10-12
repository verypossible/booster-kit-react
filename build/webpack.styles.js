import ExtractTextPlugin from 'extract-text-webpack-plugin'
// import postcssPlugins from './webpack.postcss'

const styleLoaders = {
  development: {
    test: /\.css$/,
    loaders: [
      'style-loader',
      { loader: 'css-loader', query: { modules: true, importLoaders: 1 } },
      { loader: 'postcss-loader'
        // pending new postcss-loader release - then remove loaderOptionsPlugin
        // options: {
        //   plugins: function () {
        //     return postcssPlugins
        //   }
        // }
      }
    ]
  },
  production: {
    test: /\.css$/,
    loaders: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: [
        { loader: 'css-loader', query: { modules: true, importLoaders: 1 } },
        { loader: 'postcss-loader'
          // pending new postcss-loader release - then remove loaderOptionsPlugin
          // options: {
          //   plugins: function () {
          //     return postcssPlugins
          //   }
          // }
        }
      ]
    })
  }
}

export default styleLoaders
