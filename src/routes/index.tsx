import * as React from 'react'

import withSubRoutes from 'hoc/withSubRoutes'
import { StoreWithState } from 'lib/types'

import EntryLayout from './layout'
import routes from './routes'

interface RoutesProps {
  store: StoreWithState
}

const AppEntry = withSubRoutes(EntryLayout)

const Routes: React.SFC<RoutesProps> = ({ store }) => (
  <AppEntry routes={routes} store={store} />
)

export default Routes
