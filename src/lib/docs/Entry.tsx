import * as React from 'react'
import { Route } from 'react-router-dom'

import { Layout } from './components'
import parseData from './data'
import loadData from './dataLoader'

const DocsEntry = ({ types }) => (
  <div>
    {console.log(types)}
    <Route render={() => <Layout nav='nav' content='content' />} />
  </div>
)

export default DocsEntry
