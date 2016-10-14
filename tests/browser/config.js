import Nightmare from 'nightmare'
import path from 'path'

// /* eslint-disable */
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
// /* eslint-enable */

export const browser = Nightmare({
  show: false,
  webPreferences: {
    preload: path.resolve(__dirname, 'preload.js')
  },
  waitTimeout: 10000,
  gotoTimeout: 10000,
  loadTimeout: 10000,
  typeInterval: 20
})
