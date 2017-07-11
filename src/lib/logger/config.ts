import _debug from 'debug'
import Rollbar from './rollbar'

const env = __PROD__ ? 'production' : 'development'

export const local = {
  critical: _debug('app:logger:critical'),
  debug: _debug('app:logger:debug'),
  error: _debug('app:logger:error'),
  info: _debug('app:logger:info'),
  warning: _debug('app:logger:warning')
}

const options = {
  development: local,
  production: Rollbar
}

export const reporter = options[env]

if (__DEV__) {
  reporter.critical = console.error.bind(console)
  reporter.error = console.error.bind(console)
  reporter.warning = console.warn.bind(console)
  reporter.info = console.info.bind(console)
  reporter.debug = console.log.bind(console)
}

export const errors = {
  data: 'Data must be an object',
  message: 'Incorrect Message Type: The message must be a string.'
}

export function validate (message: string, data: object) {
  return new Promise((resolve, reject) => {
    if (typeof message !== 'string') {
      reject(new Error(errors.message))
    }

    if (data && typeof data !== 'object') {
      reject(new Error(errors.data))
    }

    if (__TEST__) {
      resolve(false)
    }

    resolve()
  })
}
