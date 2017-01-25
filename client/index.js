import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import createStore from '../universal/store/createStore'
import Root from './Root'

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
    <Root
      store={store}
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
    module.hot.accept('./Root', () => {
      const NextRoot = require('./Root').default

      render(
        <AppContainer>
          <NextRoot
            store={store}
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
    }
  }
}
