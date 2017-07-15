import { createSelector } from 'reselect'

import { KEY } from './index'

const getCounterFromState = (state: State) => state[KEY]

const getCount = createSelector(
  [getCounterFromState],
  (counter) => counter
)

export {
  getCount
}
