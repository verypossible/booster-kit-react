/* @flow */
import React from 'react'
import { Match } from 'react-router'

import type { RouteProps } from './types'

export const MatchWithSubRoutes = (route: RouteProps) => (
  <Match {...route} render={(props) => (
    <route.component {...props} store={route.store} routes={route.routes} />
  )} />
)
