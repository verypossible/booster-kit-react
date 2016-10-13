import ExtractTextPlugin from 'extract-text-webpack-plugin'
// import postcssPlugins from './webpack.postcss'

const loaderOptions = [
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

const styleLoaders = {
  development: {
    test: /\.css$/,
    loaders: [
      'style-loader',
      ...loaderOptions
    ]
  },
  production: {
    test: /\.css$/,
    loaders: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: [
        ...loaderOptions
      ]
    })
  }
}

export default styleLoaders
