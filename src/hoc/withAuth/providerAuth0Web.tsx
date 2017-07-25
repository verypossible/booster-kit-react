import Auth0JS from 'auth0-js'
import * as React from 'react'

import { getDisplayName } from 'hoc/helpers'

import { AuthConfig, AuthResult, AuthSocialAPI, WithAllProps } from './types'

/**
 *   Documentation for using the Auth0 SDK for Web:
 *     https://auth0.com/docs/libraries/auth0js
 *
 *  Use this recipe to strike a nice balance between complete control over the user experience,
 *  with a minimum amount of manual configuration.
 */
const authSocialWrapper = ({
  auth0Config,
  callbackPath,
  errors,
  redirectOnError,
  redirectOnSuccess
}: AuthConfig) => (WrappedComponent: React.SFC<AuthSocialAPI>) => {
  const WithAuthSocial: React.SFC<WithAllProps> = ({
    deleteUser,
    getProvider,
    getUserFromToken,
    logError,
    loginSocialUser,
    purgeSession,
    redirect,
    shouldProcessAuth,
    startSession,
    updateUser,
    ...props
  }) => {
    // ------------------------------------
    // Private Methods
    // ------------------------------------

    /* Initialize a new Auth0 WebAuth Object */
    const auth0 = new Auth0JS.WebAuth(auth0Config)

    const handleLoginFailure = (error) => {
      const reason = errors.failedLogin()
      logError({ error, reason })
      redirect({ pathname: redirectOnError, state: { error: reason } })
    }

    /**
     * Logs the user in to the GraphQL Service with the user's idToken,
     * then sets the idToken in location state for Apollo Client to consume
     * for all future requests and returns the payload for updating the user.
     */
    const loginUserWithSocial = ({ idToken, userFromToken }) => loginSocialUser({ idToken })
      .then(
        ({ data: { loginUserWithAuth0: { user: { id } } }}) => ({
          id,
          token: idToken,
          userFromToken
        }),
        handleLoginFailure
      )

    const setGraphqlClientAuthToken = ({ id, token, userFromToken }) => {
      redirect({
        pathname: callbackPath,
        state: { token }
      })
      return { id, token, userFromToken }
    }

    const storeSession = ({ id, token, userFromToken: { picture, email, exp, name, user_id } }) => {
      const updateUserPayload = {
        avatar: picture,
        email,
        expiresAt: exp,
        id,
        name,
        username: email,
        ...getProvider(user_id)
      }

      startSession({ token, ...updateUserPayload })
      return updateUserPayload
    }

    /** Deletes the user immediately if the email is associated to another account */
    const handleExistingUsers = ({ error, user: { email, id } }) => deleteUser(id)
      .then(() => {
        const reason = errors.failedUpdate({ email })

        logError({ error, reason })
        return { error: reason }
      })

    /**
     *  Updates the user model with data from the Social service.
     *  If the email from the social provider matches an existing email on an account,
     *  we immediately delete the user and return an error.
     *
     *  We do this for two reasons:
     *    1. It prevents user's from creating multiple accounts, then being unable to link them together.
     *    2. In order to lock things down, users can only change fields on their own account and they cannot
     *        read fields from any other user, so we rely on the server to tell us whether or not the email is
     *        unique, then remove the temporary account.
     */
    const updateUserWithDataFromToken = (user) => updateUser(user)
      .then(
        ({ data }) => ({ user: data.updateUser.changedUser }),
        (error) => handleExistingUsers({ error, user })
      )

    const handleAuthResult = (result: AuthResult) => {
      if (result) {
        redirect({
          pathname: !result.error ? redirectOnSuccess : redirectOnError,
          state: { ...result }
        })
      }
    }

    // ------------------------------------
    // Public Methods
    // ------------------------------------
    /** The entry point for processing authentication on those routes set as authorized Redirect URIs within
     *  Auth0.
     */
    const authenticate = () => {
      if (shouldProcessAuth) {
        getUserFromToken()
          .then(loginUserWithSocial)
          .then(setGraphqlClientAuthToken)
          .then(storeSession)
          .then(updateUserWithDataFromToken)
          .then(handleAuthResult)
      }
    }

    const loginSocial = (connection) => auth0.authorize({ connection })

    const logoutSocial = () => {
      auth0.logout({
        clientID: __AUTH_CID__
      })

      purgeSession()
    }

    const socialAuthAPI = {
      authenticate,
      loginSocial,
      logoutSocial
    }

    return (
      <WrappedComponent {...socialAuthAPI} {...props} />
    )
  }

  WithAuthSocial.displayName = getDisplayName(WrappedComponent, 'authSocial')

  return WithAuthSocial
}

export default authSocialWrapper
