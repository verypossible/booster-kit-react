/* @flow */
import React from 'react'
import { Route } from 'react-router-dom'

import type { RouteProps } from './types'

export const MatchWithSubRoutes = (route: RouteProps) => (
  <Route {...route} render={(props) => (
    <route.routeComponent {...props} store={route.store} routes={route.routes} />
  )} />
)
