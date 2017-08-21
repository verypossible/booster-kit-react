import * as React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components'

import { ConnectProps } from '../types'

import Main from './Main'
import Sidebar from './Sidebar'

const DocsEntry: React.SFC<ConnectProps> = ({
  docs
}) => (
  <Layout.Grid>
    <Helmet>
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900' rel='stylesheet' />
    </Helmet>
    <Sidebar {...docs} />
    <Main />
  </Layout.Grid>
)

export default DocsEntry
