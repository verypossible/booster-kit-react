import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'

import { client } from './lib/graphql'
import { StoreWithState } from './lib/types'
import Routes from './routes'

interface RootProps {
  store: StoreWithState
}

const Root: React.SFC<RootProps> = ({ store }) => {
  return (
    <ApolloProvider store={store} client={client}>
      <BrowserRouter>
        <Routes store={store} />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default Root
