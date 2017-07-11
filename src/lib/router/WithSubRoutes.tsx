import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from 'components/NotFound'

import { getDisplayName } from 'hoc/helpers'

const composedMatchSubRoutes = (WrappedComponent: React.SFC<any>) => {
  const MatchRoutes: React.SFC<any> = ({ routes, store }) => {
    return (
      <WrappedComponent>
        <Switch>
          {routes.map(({
            routeComponent: RouteComponent,
            routes: subRoutes,
            ...route
          }) => (
            <Route
              key={route.id}
              {...route}
              children={(props) => <RouteComponent {...props} store={store} routes={subRoutes} />}
            />
          ))}
          <Route path='*' render={({ location }) => <NotFound location={location} />} />
        </Switch>
      </WrappedComponent>
    )
  }

  MatchRoutes.displayName = getDisplayName(WrappedComponent, 'matchSubRoutes')

  return MatchRoutes
}

export default composedMatchSubRoutes
