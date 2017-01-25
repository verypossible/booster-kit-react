/* @flow */
import React from 'react'

import LayoutCore from 'layouts/LayoutCore'

import type { Route } from './types'
import match from './matches'

const ConfigureRoutes = ({ store, routes }: { store: Object, routes: Array<Route> }) => {
  return (
    <LayoutCore>
      <div>
        {routes.map((route, i) => (
          <match.WithSubRoutes key={i} {...route} store={store} />
        ))}
      </div>
    </LayoutCore>
  )
}

export default ConfigureRoutes
