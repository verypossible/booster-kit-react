import { REHYDRATE } from 'redux-persist/constants'
import { createSelector } from 'reselect'

import { KEY } from './index'

const getLastAction = (state: State) => state[KEY]

const actionRehydrate = createSelector(
  [getLastAction],
  (action: LastAction) => (action.type === REHYDRATE) && action
)

export {
  actionRehydrate
}
