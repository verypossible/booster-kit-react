import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Layout, UtilityBar } from '../components'

import Architecture from './Architecture'
import Collection from './Collection'
import Item from './Item'
import Part from './Part'

const Main = () => (
  <Layout.Content>
    <Switch>
      <Route exact path='/docs/architecture' component={Architecture} />
      <Route path='/docs/:collection/:part/:item' component={Item} />
      <Route path='/docs/:collection/:part' component={Part} />
      <Route path='/docs/:collection' component={Collection} />
    </Switch>
    <Route component={UtilityBar} />
  </Layout.Content>
)

export default Main
