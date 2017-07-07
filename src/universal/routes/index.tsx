import * as React from 'react'

import LayoutCore from 'layouts/LayoutCore'

import { MatchRoutes, WithSubRoutes } from 'lib/router'
import { StoreWithState } from 'lib/types'

import routes from './routes'

interface RoutesProps {
  store: StoreWithState
}

const Routes: React.SFC<RoutesProps> = ({ store }) => (
  <LayoutCore>
    <MatchRoutes>
      {routes.map((route) => <WithSubRoutes key={route.id} store={store} {...route} />)}
    </MatchRoutes>
  </LayoutCore>
)

export default Routes
