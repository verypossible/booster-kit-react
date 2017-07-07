import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import * as counter from './counter'

export const makeRootReducer = combineReducers<S>({
  [counter.KEY]: counter.reducer,
  form: formReducer
})

export default makeRootReducer
