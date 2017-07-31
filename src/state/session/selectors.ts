import { createSelector } from 'reselect'

import { KEY } from './index'

const sessionState = (state: State) => state[KEY]

const getSession = createSelector(
  [sessionState],
  (session: Session) => session
)

export {
  getSession
}
