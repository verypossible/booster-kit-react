import { combineReducers } from 'redux'
import { toast } from 'modules/Toast'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    [toast.KEY]: toast.reducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
