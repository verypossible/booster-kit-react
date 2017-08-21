import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Layout, UtilityBar } from '../components'

import Collection from './Collection'
import Module from './Module'

const Main = () => (
  <Layout.Content>
    <Switch>
      <Route path='/docs/:collection/:module' component={Module} />
      <Route exact path='/docs/:collection' component={Collection} />
      <Route path='/docs' component={UtilityBar} />
    </Switch>
  </Layout.Content>
)

export default Main
