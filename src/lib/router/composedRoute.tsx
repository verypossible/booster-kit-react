import * as React from 'react'

import { Route } from 'react-router-dom'

const composedRouteWrapper = (WrappedComponent: React.SFC<any>) => {
  const ComposedRoute: React.SFC<ComposedRoute> = ({
    route, ...props
  }) => (
    <Route
      {...route}
      render={({ ...routeProps }) => React.createElement(
        WrappedComponent,
        { ...props, ...routeProps }
      )}
    />
  )

  return ComposedRoute
}

export default composedRouteWrapper
