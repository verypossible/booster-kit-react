import 'es6-promise/auto'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App, { AppProps } from './App'
import { Store } from './lib/types'
import createStore from './state/createStore'

const store: Store<{}> = createStore()

const MOUNT_NODE = document.getElementById('root')

const render = (Component: React.SFC<AppProps>) => {
  ReactDOM.render(
    <AppContainer>
      <Component
        store={store}
      />
    </AppContainer>,
    MOUNT_NODE
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => render(App))
}
