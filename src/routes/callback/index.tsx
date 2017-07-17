import * as React from 'react'

import withAuth from 'hoc/withAuth'
import { Route } from 'lib/router'

import { Box } from 'atoms'

const CallbackHandler = ({ authenticate }) => (
  <Route
    path='/callback'
    render={(props) => {
      authenticate(props)
      return (
        <Box>
          Authing...
        </Box>
      )
    }}
  />
)

const CallbackRoute = withAuth()(CallbackHandler)

export default [{
  id: 'root-callback',
  path: '/callback',
  routeComponent: CallbackRoute
}]
