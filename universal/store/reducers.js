import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { toast } from 'modules/Toast'
import { KEY as session, reducer as sessionReducer } from 'modules/session'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    [session]: sessionReducer,
    [toast.KEY]: toast.reducer,
    form: formReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
