import path from 'path'
import config from '../../config'

const renderHtml = (filename) => ({
  template: path.resolve(__dirname, '../../client/index.html'),
  favicon: path.resolve(__dirname, '../../universal/static/favicon.ico'),
  filename: filename,
  minify: {
    collapseWhitespace: true
  },
  segment: {
    token: config.segment_token || false
  }
})

export default renderHtml
