import path from 'path'
import config from '../../config'

const renderHtml = (filename) => ({
  template: path.resolve(__dirname, '../../src/client/index.html'),
  favicon: path.resolve(__dirname, '../../src/universal/static/favicon.ico'),
  filename: filename,
  minify: {
    collapseWhitespace: true
  },
  segment: {
    token: config.segment_token || false
  }
})

export default renderHtml
