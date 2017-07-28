import * as React from 'react'

import { authWithSocial } from 'hoc/withAuth'
import { Route } from 'lib/router'

import { Box } from 'atoms'

const CallbackHandler = ({ authenticate }) => (
  <Route
    path='/callback'
    render={() => {
      authenticate()
      return (
        <Box>
          Authing...
        </Box>
      )
    }}
  />
)

const CallbackRoute = authWithSocial()(CallbackHandler)

export default [{
  id: 'root-callback',
  path: '/callback',
  routeComponent: CallbackRoute
}] as RouteConfig[]
