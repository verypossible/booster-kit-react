import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore } from 'redux-persist'

import reducers from './reducers'

const makeStore = (preloadedState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware: any = []

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    reducers,
    preloadedState,
    compose(applyMiddleware(...middleware), ...enhancers)
  )

  const persistor = persistStore(store)

  if (module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(reducers))
  }

  return { store, persistor }
}

export default makeStore
