import * as React from 'react'

import {
  Box
} from 'atoms'

const NotFound: React.SFC<NotFound> = ({ location: { pathname } }) => (
  <Box>
    The content at {pathname} could not be found.
  </Box>
)

export default NotFound
