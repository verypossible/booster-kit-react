import { REHYDRATE } from 'redux-persist/constants'
import { createSelector } from 'reselect'

import { StoreWithState } from 'lib/types'

import { KEY } from './index'

const getLastAction = (state: StoreWithState) => state[KEY]

const actionRehydrate = createSelector(
  [getLastAction],
  (action) => (action.type === REHYDRATE) && action
)

export {
  actionRehydrate
}
