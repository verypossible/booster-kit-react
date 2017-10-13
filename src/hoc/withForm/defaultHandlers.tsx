import * as React from 'react'

import { FormCompleted } from 'components/Form'
import logger from 'lib/logger'

export const defaultOnSuccess: React.SFC<any> = () =>
  <FormCompleted message={"You're form was successfully submitted!"} />

export const defaultHandleSubmit = ({ values }) => new Promise(resolve => {
  logger.log.info('Your form is now in the handleSubmit function', { values })
  resolve(values)
})
