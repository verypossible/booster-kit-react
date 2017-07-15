import { compose } from 'lib/helpers'
import { withRouter } from 'lib/router'

import connectState from '../connectState'

import providers from './providers'

interface WithAuth {
  provider: 'auth0Web' | 'auth0Lock'
}

const withAuth = ({
  getProvider = providers
} = {}) => ({
  provider = 'auth0Web'
}: WithAuth = {}) => {
  const withAuthProvider = getProvider[provider]
  console.log(withAuthProvider)
  return compose(
    withRouter,
    connectState(
      (selectors: Selectors) => ({
        session: selectors.getSession,
        sessionExpired: selectors.sessionExpired
      }),
      (actions: Actions) => ({
        clearSession: actions.clearSession,
        startSession: actions.startSession
      })
    ),
    withAuthProvider
  )
}

export default withAuth()
