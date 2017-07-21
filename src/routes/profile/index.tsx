import * as React from 'react'

import withAuth from 'hoc/withAuth'
import { Route } from 'lib/router'

import { Box } from 'atoms'

const Profile = () => (
  <Route
    path='/profile'
    render={({ location: { state: { user }} }) => {
      return (
        <Box>
          You are viewing the profile for {user.username}
        </Box>
      )
    }}
  />
)

const ProfileRoute = withAuth()(Profile)

export default [{
  id: 'root-profile',
  path: '/profile',
  routeComponent: ProfileRoute
}]
