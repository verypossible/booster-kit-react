import config from '../config'
import path from 'path'

const paths = config.utils_paths

const renderHtml = {
  index: {
    template: path.join(paths.client, 'index.html'),
    hash: false,
    favicon: path.join(paths.universal, 'static/favicon.ico'),
    filename: 'index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  },
  twoHundred: {
    template: path.join(paths.client, 'index.html'),
    hash: false,
    favicon: path.join(paths.universal, 'static/favicon.ico'),
    filename: '200.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  }
}

export default renderHtml
