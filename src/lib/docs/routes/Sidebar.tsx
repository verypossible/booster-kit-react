import * as React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import { Icon, Layout, LinkBar } from '../components'
import { connectDocs } from '../data'
import { ConnectProps } from '../types'

const Collections = ({ nav }) => (<LinkBar links={nav.collections} nav />)
const Items = ({ nav }) => (<LinkBar links={nav.items} nav />)
const Parts = ({ nav }) => (<LinkBar links={nav.parts} nav />)

const enhance = connectDocs({ selector: 'docs' })

const Sidebar: React.SFC<ConnectProps> = () => (
  <Layout.Nav>
    <Link to='/docs'><Icon icon='ProjectLogo' size='small' /></Link>
      <Switch>
        <Route path='/docs/:collection/:part' component={enhance(Items)} />
        <Route path='/docs/:collection' component={enhance(Parts)} />
        <Route path='/docs' component={enhance(Collections)} />
      </Switch>
  </Layout.Nav>
)

export default Sidebar
