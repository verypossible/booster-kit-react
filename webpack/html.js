import path from 'path'
import config from '../config'

const renderHtml = (filename) => ({
  template: '../src/index.html',
  favicon: '../src/static/favicon.ico',
  filename: filename,
  minify: {
    collapseWhitespace: true
  },
  segment: {
    token: config.segment_token || false
  }
})

export default renderHtml
