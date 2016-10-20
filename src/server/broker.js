import _debug from 'debug'

const debug = _debug('app:server:broker')

module.exports.run = function () {
  debug('Broker PID:', process.pid)
}
