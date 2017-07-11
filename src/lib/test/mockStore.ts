import configureStore from 'redux-mock-store'
import { REHYDRATE } from 'redux-persist/constants'
import thunk from 'redux-thunk'

import actionBuffer from 'state/actionBuffer'

const middlewares = [
  thunk, actionBuffer(REHYDRATE)
]

const mockStore = configureStore(middlewares)

export default mockStore
