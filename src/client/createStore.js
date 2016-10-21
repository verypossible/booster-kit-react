import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import makeRootReducer from '../universal/redux/reducers'
import createLogger from 'redux-logger'

export default (preloadedState = {}) => {
  const reduxRouter = routerMiddleware(browserHistory)
  const middleware = [
    reduxRouter,
    thunk
  ]

  const enhancers = []
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension
    const logger = createLogger()
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
    middleware.push(logger)
  }

  const store = createStore(
    makeRootReducer(),
    preloadedState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers)
    })
  }

  return store
}
