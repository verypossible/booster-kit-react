import * as React from 'react'

import withSubRoutes, { RouteProps } from 'hoc/withSubRoutes'

import initialize, { InitializeProps } from './initialize'
import EntryLayout from './layout'
import routes from './routes'

/** LayoutProps Shorthand */
type LP = InitializeProps

const AppEntry = withSubRoutes<LP>(EntryLayout)

const layout = (props: LP) => ({
  ...props
})

const Routes: React.SFC<RouteProps & LP> = ({ initialized, store }) =>
  <AppEntry layout={layout({ initialized: true })} routes={routes} store={store} />

export default Routes
