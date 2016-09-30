import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  dev: {
    test: /\.css$/,
    loaders: [
      'style-loader',
      { loader: 'css-loader', query: { modules: true } },
      { loader: 'postcss-loader' }
    ]
  },
  prod: {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: [
        { loader: 'css-loader', query: { modules: true } },
        { loader: 'postcss-loader' }
      ]
    })
  },
  extract:
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    })
}
