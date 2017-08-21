import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Icon, Layout, Nav } from '../components'
import { DocsState } from '../types'

const Sidebar: React.SFC<DocsState> = ({ collections }) => (
  <Layout.Nav>
    <Icon icon='ProjectLogo' size='small' />
    {collections && (
      <Switch>
        <Route path='/docs/:collection/:module' render={Nav.Collection} />
        <Route path='/docs/:collection' render={Nav.Collection} />
        <Route exact path='/docs' component={Nav.Collections} />
      </Switch>
    )}
  </Layout.Nav>
)

export default Sidebar
