import { createSelector } from 'reselect'

import { KEY } from './index'

const sessionState = (state: State) => state[KEY]

const getSession = createSelector(
  [sessionState],
  (session) => session
)

const sessionExpired = createSelector(
  [sessionState],
  (session: ActiveSession) => session && new Date().getTime() < session.expiresAt
)

export {
  getSession,
  sessionExpired
}
