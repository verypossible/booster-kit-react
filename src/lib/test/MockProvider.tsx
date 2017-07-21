import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'

import client from 'lib/graphql/client'
import reducers from 'state/stateManager'

interface MockProps {
  children?: any,
  store?: any
}

const WithProvider: React.SFC<MockProps> = ({ children, store }) => {
  const defaultStore = createStore(reducers())
  return (
    <BrowserRouter>
      <Route
        path='/'
        children={({ history }) => {
          const apolloClient = client(history)
          return (
            <ApolloProvider store={store || defaultStore} client={apolloClient}>
              {children}
            </ApolloProvider>
          )
        }}
      />
    </BrowserRouter>
  )
}

export default WithProvider
