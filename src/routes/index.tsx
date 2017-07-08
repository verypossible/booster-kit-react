import * as React from 'react'

import EntryLayout from './layout'

import { MatchRoutes, WithSubRoutes } from 'lib/router'
import { StoreWithState } from 'lib/types'

import routes from './routes'

interface RoutesProps {
  store: StoreWithState
}

const Routes: React.SFC<RoutesProps> = ({ store }) => (
  <EntryLayout>
    <MatchRoutes>
      {routes.map((route) => <WithSubRoutes key={route.id} store={store} {...route} />)}
    </MatchRoutes>
  </EntryLayout>
)

export default Routes
