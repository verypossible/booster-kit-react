import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Store } from 'redux'
import { PersistGate } from 'redux-persist/integration/react'

import client from 'lib/graphql/client'
import Routes from 'routes'

import { renderGlobalStyles, theme, ThemeProvider } from 'ui'

interface IApp {
  store: Store<{}>
  persistor: any
}

renderGlobalStyles()

const App: React.SFC<IApp> = ({ store, persistor }) => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme.light}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </ApolloProvider>
)

export { IApp }
export default hot(module)(App)
