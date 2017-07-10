import * as createActionBuffer from 'redux-action-buffer'
import configureStore from 'redux-mock-store'
import { REHYDRATE } from 'redux-persist/constants'
import thunk from 'redux-thunk'

const middlewares = [
  thunk, createActionBuffer(REHYDRATE)
]

const mockStore = configureStore(middlewares)

export default mockStore
