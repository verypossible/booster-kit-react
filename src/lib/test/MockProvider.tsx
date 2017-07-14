import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
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
    <ApolloProvider client={client} store={store || defaultStore}>
      <BrowserRouter>
        <div>
          {children}
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default WithProvider
