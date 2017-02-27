import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'
import { loadState, saveState } from './persistedState'

export default (preloadedState = loadState()) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
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
    makeRootReducer(),
    preloadedState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )

  store.subscribe(() => {
    const state = store.getState()
    saveState(state)
  })

  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers)
    })
  }

  return store
}
