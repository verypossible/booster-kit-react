import ExtractTextPlugin from 'extract-text-webpack-plugin'

const style = 'style-loader'
const css = 'css-loader'
const postcss = 'postcss-loader'
const sass = 'sass-loader'

const cssOptions = [{
  loader: css,
  query: {
    modules: true,
    importLoaders: 1
  }
}, {
  loader: postcss
}]

const sassOptions = [
  { loader: css, query: { modules: false, importLoaders: 1 } },
  { loader: postcss },
  { loader: sass, query: { outputStyle: 'compressed', includePaths: /node_modules/ } }
]

const styleLoaders = {
  development: [
    {
      test: /\.css$/,
      use: [
        style,
        ...cssOptions
      ]
    }, {
      test: /\.scss$/,
      use: [
        style,
        ...sassOptions
      ]
    }
  ],
  production: [
    {
      test: /\.css$/,
      loaders: ExtractTextPlugin.extract({
        fallbackLoader: style,
        loader: [
          ...cssOptions
        ]
      })
    }, {
      test: /\.scss$/,
      loaders: ExtractTextPlugin.extract({
        fallbackLoader: style,
        loader: [
          ...sassOptions
        ]
      })
    }
  ]
}

export default styleLoaders
