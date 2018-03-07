import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import * as session from './session'

export const makeRootReducer = combineReducers<State>({
  [session.KEY]: session.reducer,
  form: formReducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, makeRootReducer)

export default persistedReducer
