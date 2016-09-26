import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { browserHistory } from 'react-router'

import createStore from '../universal/store/createStore'
import App from '../universal/containers/AppContainer'

// ========================================================
// Store and History Instantiation
// ========================================================
const preloadedState = window.___PRELOADED_STATE__
const store = createStore(preloadedState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

render(
  <AppContainer>
    <App
      store={store}
      history={browserHistory}
    />
  </AppContainer>,
  MOUNT_NODE
)

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
    module.hot.accept('../universal/containers/AppContainer', () => {
      const NextApp = require('../universal/containers/AppContainer').default

      render(
        <AppContainer>
          <NextApp
            store={store}
            history={browserHistory}
          />
        </AppContainer>,
        MOUNT_NODE
      )
    })
  }
}

/*
 * Warning from React Router, caused by react-hot-loader.
 * The warning can be safely ignored, so filter it from the console.
 * Otherwise you'll see it every time something changes.
 * See https://github.com/gaearon/react-hot-loader/issues/298
 */
if (module.hot) {
  const isString = (args) => typeof args === 'string'

  const orgError = console.error // eslint-disable-line no-console
  console.error = (...args) => { // eslint-disable-line no-console
    if (args && args.length === 1 && isString(args[0]) && args[0].indexOf('You cannot change <Router routes>;') > -2) {
      // React route changed
    } else {
      // Log the error as normally
      orgError.apply(console, args)
=======
// ========================================================
const preloadedState = window.___PRELOADED_STATE__
const store = createStore(preloadedState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = require('../universal/routes/index').default(store)

  ReactDOM.render(
    <AppContainer
      store={store}
      history={browserHistory}
      routes={routes}
    />,
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
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
>>>>>>> master
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('../universal/routes/index', () => {
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    })
  }
}
