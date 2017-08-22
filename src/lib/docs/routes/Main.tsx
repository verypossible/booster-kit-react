import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Layout, UtilityBar } from '../components'

import Collection from './Collection'
import Module from './Module'
import StaticCollection from './StaticCollection'
import StaticItem from './StaticCollectionItem'
import StaticDocs from './StaticDocs'

const Main = () => (
  <Layout.Content>
    <Switch>
      <Route path='/docs/modules/:collection/:module' component={Module} />
      <Route exact path='/docs/modules/:collection' component={Collection} />
      <Route exact path='/docs/:static' component={StaticDocs} />
      <Route exact path='/docs/:static/:staticCollection' component={StaticCollection} />
      <Route exact path='/docs/:static/:staticCollection/:staticItem' component={StaticItem} />
    </Switch>
    <Route component={UtilityBar} />
  </Layout.Content>
)

export default Main
