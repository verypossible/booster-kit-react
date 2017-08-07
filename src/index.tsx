import 'es6-promise/auto'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'
import { Store } from './lib/types'
import createStore from './state/createStore'

declare module 'react-hot-loader'

interface RequireImport {
  default: any
}

const store: Store<{}> = createStore()

const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
  <AppContainer>
    <App
      store={store}
    />
  </AppContainer>,
  MOUNT_NODE
)

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <AppContainer>
        <App
          store={store}
        />
      </AppContainer>,
      MOUNT_NODE
    )
  })
}
