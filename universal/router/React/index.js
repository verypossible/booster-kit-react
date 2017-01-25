/* @flow */
import React from 'react'

import LayoutSidebar from 'layouts/LayoutSidebar'
import Markdown from 'components/Markdown'
import Counter from 'modules/Counter'

import type { Route } from '../types'
import match from '../matches'

const ReactRoute = ({ routes, store }: { routes: Array<Route>, store: Object }) => {
  return (
    <LayoutSidebar>
      {routes.map((route, i) => (
        <match.WithSubRoutes key={i} {...route} store={store} />
        )
      )}
    </LayoutSidebar>
  )
}

export default [{
  pattern: '/react',
  component: ReactRoute,
  routes: [{
    pattern: '/react/markdown',
    component: Markdown
  }, {
    pattern: '/react/counter',
    component: Counter
  }]
}]
