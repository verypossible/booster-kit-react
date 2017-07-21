import { Store as ApolloStore } from 'apollo-client/store'
import { combineReducers, Reducer } from 'redux'
import { reducer as formReducer } from 'redux-form'

import client from 'lib/graphql/client'

import * as counter from './counter'
import * as lastAction from './lastAction'
import * as session from './session'

export const makeRootReducer = combineReducers<State>({
  [counter.KEY]: counter.reducer,
  [lastAction.KEY]: lastAction.reducer,
  [session.KEY]: session.reducer,
  apollo: client().reducer() as Reducer<ApolloStore>,
  form: formReducer
})

export default makeRootReducer
