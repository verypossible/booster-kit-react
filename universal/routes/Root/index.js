/* @flow */
import React from 'react'

import Home from 'layouts/Home'

const RootRoute = () => (
  <Home />
)

export default [{
  path: '/',
  routeComponent: RootRoute,
  exact: true
}]
