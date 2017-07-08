import { createSelector } from 'reselect'

import { KEY } from './module'

const getCounterFromState = (state: S) => state[KEY]

const getCount = createSelector(
  [getCounterFromState],
  (counter) => counter
)

export {
  getCount
}
