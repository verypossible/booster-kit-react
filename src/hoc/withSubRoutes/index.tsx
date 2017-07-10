import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from 'components/NotFound'
import { MakeRoute } from 'lib/router/types'
import WithSubRoutes from 'lib/router/WithSubRoutes'

import { getDisplayName } from '../helpers'

const getPath = (match: Match, path: string) => {
  const isSubRouteIndex = !path
  return isSubRouteIndex ? match.path : `${match.path}${path}`
}

const composedMatchSubRoutes = (WrappedComponent: React.SFC<any>) => {
  const MatchRoutes: React.SFC<MakeRoute> = ({ routes, match, location, store }) => {
    const SwitchRoutes = (
      <Switch>
        {routes.map(({ path, ...route }) => (
          <WithSubRoutes key={route.id} path={getPath(match, path)} store={store} {...route} />
        ))}
        <Route path='*' component={NotFound} />
      </Switch>
    )

    const WithLayout = React.createElement(WrappedComponent, { location }, SwitchRoutes)

    return WithLayout
  }

  MatchRoutes.displayName = getDisplayName(WrappedComponent, 'matchSubRoutes')

  return MatchRoutes
}

export default composedMatchSubRoutes
