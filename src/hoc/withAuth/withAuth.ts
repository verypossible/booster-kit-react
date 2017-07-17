import { graphql } from 'react-apollo'

import { LoginUserWithAuth0Input, mutate } from 'lib/graphql'
import { compose } from 'lib/helpers'
import { withRouter } from 'lib/router'

import connectState from '../connectState'

import providers from './providers'

/* Add a new provider HOC, import it into ./probider/index, and register it here as an accepted value */
type Provider = 'auth0Web' | 'auth0Lock'

/* Strategies for authorization that the HOCs support. */
type Strategies = 'social' | 'username'

/* Middlewares for the Provider HOCs. They can be Graphql qeuries or any API request mapped to
    prop values. The middleware props are passed to the selected Auth Provider HOC
 */
const getStrategies = {
  auth0Web: {
    social: graphql<LoginUserWithAuth0Input>(mutate.LoginWithAuth0, {
      props: (props) => ({
        loginUser: (idToken: string) => props.mutate({ variables: { input: { idToken }}})
      })
    })
  }
}

/* A higher order function that sets the providers, accepts a config object, and returns a composed function
  that returns the provider higher order component. The HOC injects the wrapped component with the auth API
  for the given provider.
*/
const withAuthWrapper = ({
  getProvider = providers
} = {}) => ({
  provider = 'auth0Web' as Provider,
  strategies = ['social'] as [Strategies]
} = {}) => {
  const withMiddlewares = strategies.map((strategy) => getStrategies[provider][strategy])
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
    ...withMiddlewares,
    withAuthProvider()
  )
}

export default withAuthWrapper()
