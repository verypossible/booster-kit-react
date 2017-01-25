/* @flow */
import React from 'react'

import LayoutCore from 'layouts/LayoutCore'

import match from './matches'
import routes from './routes'

const Router = ({ store }: { store: Object }) => {
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

export default Router
