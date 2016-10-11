import ExtractTextPlugin from 'extract-text-webpack-plugin'
import postcssPlugins from './webpack.postcss'

export default {
  dev: {
    test: /\.css$/,
    loaders: [
      'style-loader',
      { loader: 'css-loader', query: { modules: true, importLoaders: 1 } },
      { loader: 'postcss-loader',
        options: {
          plugins: function () {
            return postcssPlugins
          }
        }
      }
    ]
  },
  prod: {
    test: /\.css$/,
    loaders: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: [
        { loader: 'css-loader', query: { modules: true, importLoaders: 1 } },
        { loader: 'postcss-loader',
          options: {
            plugins: function () {
              return postcssPlugins
            }
          }
        }
      ]
    })
  },
  extract:
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    })
}
