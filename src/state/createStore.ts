import { applyMiddleware, compose, createStore } from 'redux'
import * as createActionBuffer from 'redux-action-buffer'
import { autoRehydrate } from 'redux-persist'
import { REHYDRATE } from 'redux-persist/constants'
import thunk from 'redux-thunk'

import persistState from './persistState'
import reducers from './stateManager'

const makeStore = (preloadedState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, createActionBuffer(REHYDRATE)]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [autoRehydrate()]
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    reducers(),
    preloadedState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )

  persistState({ store })

  if (module.hot) {
    module.hot.accept('./stateManager', () => {
      const reducers = require('./stateManager').default
      store.replaceReducer(reducers)
    })
  }

  return store
}

export default makeStore
