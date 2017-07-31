import * as React from 'react'

import { Box } from 'atoms'
import { Redirect } from 'lib/router'

const FormCompleted: React.SFC<FormCompletedProps> = ({ message, redirectTo }) => (
  redirectTo
  ? <Redirect to={redirectTo} />
  : <Box>{message}</Box>
)

export default FormCompleted
