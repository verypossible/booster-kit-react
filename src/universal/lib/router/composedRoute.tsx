import * as React from 'react'

import { Route } from 'react-router-dom'

import { RouteConfig } from './types'

interface ComposedRoute {
  route: RouteConfig
}

const composedRouteWrapper = (WrappedComponent: React.SFC<any>) => {
  const ComposedRoute: React.SFC<ComposedRoute> = ({
    route, ...props
  }) => (
    <Route
      {...route}
      render={({ ...routeProps }) => React.createElement(
        WrappedComponent,
        { ...props, ...routeProps }
      )}  // tslint:disable-line
    />
  )

  return ComposedRoute
}

export default composedRouteWrapper
