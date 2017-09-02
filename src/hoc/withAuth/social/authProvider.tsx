import * as Auth0JS from 'auth0-js'
import * as React from 'react'

import { getDisplayName } from 'hoc/helpers'

import { AuthConfig, AuthSocialProvider, WithRouter } from '../types'

/**
 *   Documentation for using the Auth0 SDK for Web:
 *     https://auth0.com/docs/libraries/auth0js
 *
 *  Use this recipe to strike a nice balance between complete control over the user experience,
 *  with a minimum amount of manual configuration.
 */
const authProviderWrapper = ({
  auth0Config
}: AuthConfig) => (WrappedComponent: React.SFC<AuthSocialProvider>) => {
  const AuthProvider: React.SFC<WithRouter> = props => {
    /* Initialize a new Auth0 WebAuth Object */
    const auth0 = new Auth0JS.WebAuth(auth0Config)

    const error = props.location.state && props.location.state.error

    const authProvider = (connection: string) => auth0.authorize({ connection })

    return (
      <WrappedComponent authProvider={authProvider} error={error} {...props} />
    )
  }

  AuthProvider.displayName = getDisplayName(WrappedComponent, 'authProvider')

  return AuthProvider
}

export default authProviderWrapper
