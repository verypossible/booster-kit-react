import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route } from 'react-router-dom'

import client from './lib/graphql/client'
import { Store } from './lib/types'
import Routes from './routes'

interface RootProps {
  store: Store<{}>
}

const Root: React.SFC<RootProps> = ({ store }) => {
  return (
    <BrowserRouter>
      <Route
        path='/'
        children={({ history }) => {
          const apolloClient = client(history)
          return (
            <ApolloProvider store={store} client={apolloClient}>
              <Routes store={store} />
            </ApolloProvider>
          )
        }}
      />
    </BrowserRouter>
  )
}

export default Root
