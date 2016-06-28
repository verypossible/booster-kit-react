import config from '../config'

const paths = config.utils_paths

const renderHtml = {
  index: {
    template: paths.client('index.html'),
    hash: false,
    favicon: paths.universal('static/favicon.ico'),
    filename: 'index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  },
  twoHundred: {
    template: paths.client('index.html'),
    hash: false,
    favicon: paths.universal('static/favicon.ico'),
    filename: '200.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  }
}

export default renderHtml
