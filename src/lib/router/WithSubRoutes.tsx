import * as React from 'react'

import NotFound from 'components/NotFound'
import { Route, Switch } from 'lib/router'
import { Store } from 'lib/types'

export interface SubRouteStaticConfig {
  layoutProps?: object
}

export interface RouteProps {
  routes: RouteConfig[],
  store?: Store<{}>,
  match?: RouterMatch
}

export interface SubRoutes extends RouteProps {
  layout?: React.ReactNode,
  layoutProps?: any
}

class WithSubRoutes extends React.Component<SubRoutes> {
  public render () {
    const Layout = this.props.layout
    return (
      <Layout {...this.props.layoutProps}>
        <Switch>
          {this.props.routes.map(({
            routeComponent: RouteComponent,
            routes: subRoutes,
            ...route
          }) => (
            <Route
              key={route.id}
              {...route}
              render={({ ...routerProps }) => {
                return <RouteComponent {...routerProps} store={this.props.store} routes={subRoutes} />
              }}
            />
          ))}
          {this.props.children}
          <Route render={({ location }) => <NotFound location={location} />} />
        </Switch>
      </Layout>
    )
  }
}

export default WithSubRoutes
