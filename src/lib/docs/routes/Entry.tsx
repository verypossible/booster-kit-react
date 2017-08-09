import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Icon, Layout, LinkBar, Nav } from '../components'
import config from '../config'
import { ConnectProps } from '../types'

import Collection from './Collection'

interface NavItem {
  id: string,
  to: string,
  text: string,
}

interface Props {
  collectionsNav: NavItem[]
  collectionsModulesNav: NavItem[]
}

const DocsEntry: React.SFC<ConnectProps & Props> = ({
  docs: { collections },
  collectionsNav,
  collectionModulesNav
}) => (
  <Layout.Grid>
    <Layout.Nav>
      <Icon icon={config.logo} />
      {collections && (
        <Switch>
          <Route path='/docs/:collection' component={Nav.Collection} />
          <Route path='/docs' component={Nav.Collections} />
        </Switch>
      )}
    </Layout.Nav>
    <Layout.Content>
      <Route path='/docs/:collection' component={Collection} />
    </Layout.Content>
  </Layout.Grid>
)

export default DocsEntry
