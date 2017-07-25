import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { MemoryRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'

import client from 'lib/graphql/client'
import reducers from 'state/stateManager'

interface MockProps {
  children?: any,
  initLocation?: Array<{
    pathname: string,
    search?: string,
    hash?: string,
    state?: string
  } | string>,
  locationStart?: number,
  store?: any
}

const WithProvider: React.SFC<MockProps> = ({
  children,
  store,
  initLocation = ['/'],
  locationStart = 0
}) => {
  const defaultStore = createStore(reducers())
  return (
    <MemoryRouter initialEntries={initLocation} initialIndex={locationStart}>
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
    </MemoryRouter>
  )
}

export default WithProvider
