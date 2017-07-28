import * as React from 'react'

import withSubRoutes, { SubRoutes } from 'hoc/withSubRoutes'

import EntryLayout from './layout'

/** LayoutProps Shorthand */
type LP = any

const AppEntry = withSubRoutes<LP>(EntryLayout)

// const layout = (props: LP) => ({
//   ...props
// })

const Routes: React.SFC<SubRoutes<LP>> = ({ routes, store }) =>
  <AppEntry routes={routes} store={store} />

export default Routes
