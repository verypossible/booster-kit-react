import * as React from 'react'

import NotFound from 'components/NotFound'
import { Route, Switch } from 'lib/router'
import { Store } from 'lib/types'

import { getDisplayName } from '../helpers'

export interface RouteProps {
  routes: RouteConfig[],
  store: Store<{}>
}

export interface SubRoutes<LayoutProps> extends RouteProps {
  layout?: LayoutProps,
}

/**
 *  LP = LayoutProps
 *
 *  interface LP extends LayoutPropsInterfaceFromParent {
 *    staticLayoutProp: string
 *  }
 *
 *  const MakeRoutes = withSubRoutes<LP>(Layout)
 *  const layout = (props: LP) => ({ ...props })
 *
 *  const RenderRoutes = ({ propA, propB, propC }) => (
 *    <MakeRoutes propA={ propA } propB={ propB } layout={ layout({ propC, staticLayoutProp: 'red' }) } />
 *  )
 *
 */

const composedMatchSubRoutes = <LP extends {}>(
  WrappedComponent: React.SFC<LP> | React.ComponentClass<LP>
) => {
  const MatchRoutes: React.SFC<SubRoutes<LP>> = ({ routes, store, layout }) => {
    return (
      <WrappedComponent {...layout}>
        <Switch>
          {routes.map(({
            routeComponent: RouteComponent,
            routes: subRoutes,
            ...route
          }) => (
            <Route
              key={route.id}
              {...route}
              children={({ ...routerProps }) => (
                <RouteComponent {...routerProps} store={store} routes={subRoutes} />
              )}
            />
          ))}
          <Route path='*' render={({ location }) => <NotFound location={location} />} />
        </Switch>
      </WrappedComponent>
    )
  }

  MatchRoutes.displayName = getDisplayName(WrappedComponent, 'subRoutes')

  return MatchRoutes
}

export default composedMatchSubRoutes
