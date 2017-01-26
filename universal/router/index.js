/* @flow */
import React from 'react'

import LayoutCore from 'layouts/LayoutCore'

import { MatchWithSubRoutes } from 'lib/router'
import routes from './routes'

const Routes = ({ store }: { store: Object }) => {
  return (
    <LayoutCore>
      {routes.map((route, i) => (
        <MatchWithSubRoutes key={i} {...route} store={store} />
      ))}
    </LayoutCore>
  )
}

export default Routes
