import * as React from 'react'

import { Box } from 'atoms'
import logger from 'lib/logger'

export const defaultOnSuccess: React.SFC<any> = () => (
  <Box>Your form was successfully submitted</Box>
)

export const defaultHandleSubmit = (values: object) => new Promise((resolve) => {
  logger.log.info('Your form is now in the handleSubmit function', { values })
  resolve(values)
})
