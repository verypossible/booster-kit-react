import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import createStore from '../universal/store/createStore'
import App from '../universal/containers/App'

// ========================================================
// Store and History Instantiation
// ========================================================
const preloadedState = window.___PRELOADED_STATE__
const store = createStore(preloadedState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

const routes = require('../universal/routes/index').default(store)

let render = () => {
  ReactDOM.render(
    <AppContainer>
      <App
        store={store}
        history={browserHistory}
        routes={routes}
      />
    </AppContainer>,
    MOUNT_NODE
  )
}

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEV__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    module.hot.accept('../universal/containers/App', () => {
      const NextApp = require('../universal/containers/App').default
      ReactDOM.render(
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
}

// ========================================================
// Go!
// ========================================================
render()
