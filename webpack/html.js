import path from 'path'
import config from '../config'

const renderHtml = (filename) => ({
  template: `../src/${filename}.html`,
  favicon: '../src/static/favicon.ico',
  filename: `${filename}.html`,
  minify: {
    collapseWhitespace: true
  },
  segment: {
    token: config.segment_token || false
  },
  redirectUri: `${config.server_url}${config.auth_redirectUri}`
})

export default renderHtml
