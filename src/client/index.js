import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import createStore from '../universal/store/createStore'
import App from '../universal/containers/App'

const preloadedState = window.___PRELOADED_STATE__
const store = createStore(preloadedState)
const MOUNT_NODE = document.getElementById('root')
const routes = require('../universal/routes/index').default(store)

if (__DEV__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

render(
  <AppContainer>
    <App
      store={store}
      history={browserHistory}
      routes={routes}
    />
  </AppContainer>,
  MOUNT_NODE
)

// This code is excluded from production bundle
if (module.hot) {
  module.hot.accept('../universal/containers/App', () => {
    const NextApp = require('../universal/containers/App').default
    render(
      <AppContainer>
        <NextApp
          store={store}
          history={browserHistory}
          routes={routes}
        />
      </AppContainer>,
      MOUNT_NODE
    )
  })
}
