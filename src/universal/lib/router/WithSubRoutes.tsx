import * as React from 'react'
import { Route } from 'react-router-dom'

import { MakeRoute } from './types'

const WithSubRoutes: React.SFC<MakeRoute> = ({
  store,
  routeComponent: RouteComponent,
  routes,
  ...route
}) => {
  console.log(route)
  return (
    <Route
      {...route}
      render={({ ...props }) => (
        <RouteComponent {...props} store={store} routes={routes} />
      )}  // tslint:disable-line
    />
  )
}

export default WithSubRoutes
