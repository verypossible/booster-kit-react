import * as React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import { Icon, Layout, Nav } from '../components'
import { DocsState } from '../types'

const Sidebar: React.SFC<DocsState> = ({ collections }) => (
  <Layout.Nav>
    <Link to='/docs'><Icon icon='ProjectLogo' size='small' /></Link>
    {collections && (
      <Switch>
        <Route path='/docs/modules/:collection/:module' render={Nav.Collection} />
        <Route path='/docs/modules/:collection' render={Nav.Collection} />
        <Route exact path='/docs/modules' component={Nav.Collections} />
        <Route exact path='/docs/:static' component={Nav.StaticCollection} />
        <Route exact path='/docs/:static/:staticCollection' component={Nav.StaticItem} />
        <Route path='/docs' component={Nav.Primary} />
      </Switch>
    )}
  </Layout.Nav>
)

export default Sidebar
