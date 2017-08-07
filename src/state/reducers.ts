import { Store as ApolloStore } from 'apollo-client/store'
import { combineReducers, Reducer } from 'redux'

/** packages & tooling that share the redux store */
import { reducer as formReducer } from 'redux-form'

import * as docs from 'lib/docs'
import client from 'lib/graphql/client'

/** app state */
import * as counter from './counter'
import * as lastAction from './lastAction'
import * as session from './session'

export const makeRootReducer = combineReducers<State>({
  [counter.KEY]: counter.reducer,
  [docs.KEY]: docs.reducer,
  [lastAction.KEY]: lastAction.reducer,
  [session.KEY]: session.reducer,
  apollo: client().reducer() as Reducer<ApolloStore>,
  form: formReducer
})

export default makeRootReducer
