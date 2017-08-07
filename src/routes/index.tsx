import * as React from 'react'

import { SubRoutes, WithSubRoutes } from 'lib/router'
import DocsRoute from './docs'

import EntryLayout from './layout'

const Routes: React.SFC<SubRoutes> = ({ routes, store }) => (
  <WithSubRoutes layout={EntryLayout} routes={routes} store={store}>
    <DocsRoute />
  </WithSubRoutes>
)

export default Routes
