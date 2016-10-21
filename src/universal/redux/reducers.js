import { combineReducers } from 'redux-immutablejs'
import { compose } from 'redux'
import { toast } from 'modules/Toast'
import { routing } from './routing'

const currentReducers = (asyncReducers) => ({
  // Add sync reducers here
  [toast.KEY]: toast.reducer,
  routing,
  ...asyncReducers
})

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(currentReducers(store.asyncReducers))
}

export default (newReducers, reducerEnhancers) => {
  Object.assign(currentReducers, newReducers)
  const reducer = combineReducers({...currentReducers})
  if (reducerEnhancers) {
    return Array.isArray(reducerEnhancers) ? compose(...reducerEnhancers)(reducer) : reducerEnhancers(reducer)
  }
  return reducer
}
