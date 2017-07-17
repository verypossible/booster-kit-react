import { graphql } from 'react-apollo'

import { LoginUserWithAuth0Input, mutate } from 'lib/graphql'
import { compose } from 'lib/helpers'
import { withRouter } from 'lib/router'

import connectState from '../connectState'

import providers from './providers'

type Provider = 'auth0Web' | 'auth0Lock'

const withAuthWrapper = ({
  getProvider = providers
} = {}) => ({
  provider = 'auth0Web' as Provider
} = {}) => {
  const withAuthProvider = getProvider[provider]
  return compose(
    withRouter,
    connectState(
      (selectors: Selectors) => ({
        session: selectors.getSession,
        sessionExpired: selectors.sessionExpired
      }),
      (actions: Actions) => ({
        clearSession: actions.clearSession,
        sessionError: actions.sessionError,
        startSession: actions.startSession
      })
    ),
    graphql<LoginUserWithAuth0Input>(mutate.LoginWithAuth0, {
      props: (props) => ({
        loginUser: (idToken: string) => props.mutate({ variables: { input: { idToken }}})
      })
    }),
    withAuthProvider()
  )
}

export default withAuthWrapper()
