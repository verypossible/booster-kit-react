if (process.env.NODE_ENV !== 'production') {
  if (!require('piping')({
    hook: false,
    ignore: /(\/\.|~$|\.json$)/i
  })) {
    return
  }
}

require('babel-register')
require('babel-polyfill')
require('../src/server/server')
