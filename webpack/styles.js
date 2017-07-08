import ExtractTextPlugin from 'extract-text-webpack-plugin'

const style = 'style-loader'
const css = 'css-loader'

const cssOptions = [{
  loader: css,
  query: {
    modules: true,
    importLoaders: 1
  }
}]

const development = [{
  test: /\.css$/,
  use: [
    style,
    ...cssOptions
  ]
}]

const production = [{
  test: /\.css$/,
  loaders: ExtractTextPlugin.extract({
    fallback: style,
    use: [
      ...cssOptions
    ]
  })
}]

export default {
  development,
  production
}
