import * as React from 'react'

import withSubRoutes, { ISubRoutes } from 'hoc/withSubRoutes'

import EntryLayout from './layout'
import routes from './routes'

/** LayoutProps Shorthand */
type LP = any

const AppEntry = withSubRoutes<LP>(EntryLayout)

// const layout = (props: LP) => ({
//   ...props
// })

const Routes: React.SFC<ISubRoutes<LP>> = ({ store }) => (
  <AppEntry routes={routes} store={store} />
)

export default Routes
