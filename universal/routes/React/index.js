/* @flow */
import React from 'react'

import LayoutSidebar from 'layouts/LayoutSidebar'
import Markdown from 'components/Markdown'
import Counter from 'modules/Counter'

import type { Route } from 'lib/router/types'
import { MatchWithSubRoutes } from 'lib/router'

const ReactRoute = ({ routes, store }: { routes: Array<Route>, store: Object }) => {
  return (
    <LayoutSidebar>
      {routes.map((route, i) => (
        <MatchWithSubRoutes key={i} {...route} store={store} />
        )
      )}
    </LayoutSidebar>
  )
}

export default [{
  path: '/react',
  routeComponent: ReactRoute,
  routes: [{
    path: '/react/markdown',
    routeComponent: Markdown
  }, {
    path: '/react/counter',
    routeComponent: Counter
  }]
}]
