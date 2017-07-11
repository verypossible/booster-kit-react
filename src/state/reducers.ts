import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { client } from 'lib/graphql'

import * as counter from './counter'
import * as lastAction from './lastAction'

export const makeRootReducer = combineReducers<S>({
  [counter.KEY]: counter.reducer,
  [lastAction.KEY]: lastAction.reducer,
  apollo: client.reducer(),
  form: formReducer
})

export default makeRootReducer
