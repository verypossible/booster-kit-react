import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from 'components/NotFound'

interface MatchRouteProps {
  children: any
}

const MatchRoutes: React.SFC<MatchRouteProps> = ({ children }) => {
  return (
    <Switch>
      {children}
      <Route path='*' component={NotFound} />
    </Switch>
  )
}

export default MatchRoutes
