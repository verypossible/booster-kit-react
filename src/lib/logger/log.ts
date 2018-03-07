import { local, reporter, validate } from './config'

const rejectInput = err => local.error(err)

const log = {
  critical: (message: string, data?: object) =>
    validate(message, data).then(
      () => reporter.critical(message, data),
      err => rejectInput(err)
    ),
  debug: (message: string, data?: object) =>
    validate(message, data).then(
      () => reporter.debug(message, data),
      err => rejectInput(err)
    ),
  error: (message: string, data?: object) =>
    validate(message, data).then(
      () => reporter.error(message, data),
      err => rejectInput(err)
    ),
  info: (message: string, data?: object) =>
    validate(message, data).then(
      () => reporter.info(message, data),
      err => rejectInput(err)
    ),
  warning: (message: string, data?: object) =>
    validate(message, data).then(
      () => reporter.warning(message, data),
      err => rejectInput(err)
    )
}

export default log
