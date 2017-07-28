import * as React from 'react'

import { getDisplayName } from 'hoc/helpers'

import {
  AuthConfig,
  AuthSocialProps,
  AuthSocialResult,
  AuthWithSocial
} from '../types'

/**
 *   Documentation for using the Auth0 SDK for Web:
 *     https://auth0.com/docs/libraries/auth0js
 *
 *  Use this recipe to strike a nice balance between complete control over the user experience,
 *  with a minimum amount of manual configuration.
 */
const authSocialWrapper = ({
  callbackPath,
  redirectOnError,
  redirectOnSuccess
}: AuthConfig) => (WrappedComponent: React.SFC<AuthWithSocial>) => {
  const WithAuthSocial: React.SFC<AuthSocialProps> = ({
    authHelpers: {
      errors, getProvider, getUserFromToken, handleLoginFailure, logError, redirect, shouldProcessAuth
    },
    deleteUser,
    loginSocialUser,
    storeSession,
    updateUser,
    ...props
  }) => {
    /**
     * Logs the user in to the GraphQL Service with the user's idToken,
     * then sets the idToken in location state for Apollo Client to consume
     * for all future requests and returns the payload for updating the user.
     */
    const loginUserWithSocial = ({ idToken, user }) => loginSocialUser({ idToken })
      .then(({ id, username }) => ({
        id,
        idToken,
        ...getProvider(username),
        ...user
      }))
      .catch((error) => handleLoginFailure({ error, reason: errors.failedLogin() }))

    const setGraphqlClientAuthToken = ({ idToken, ...user }) => {
      redirect({
        pathname: callbackPath,
        state: { idToken }
      })

      return {
        idToken,
        user
      }
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
    const updateUserWithDataFromToken = ({ idToken, user }) => updateUser(user)
      .then(
        (userFromUpdate) => {
          const newSession = { ...userFromUpdate, sessionType: 'social', token: idToken }
          storeSession(newSession)
          return {
            user: newSession
          }
        },
        (error) => handleExistingUsers({ error, user })
      )

    const handleAuthResult = (result: AuthSocialResult) => {
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
      if (shouldProcessAuth && !props.session) {
        getUserFromToken()
          .then(loginUserWithSocial)
          .then(setGraphqlClientAuthToken)
          .then(updateUserWithDataFromToken)
          .then(handleAuthResult)
      }
    }

    const passThroughProps = {
      errors,
      redirect
    }

    return (
      <WrappedComponent authenticate={authenticate} {...props} {...passThroughProps} />
    )
  }

  WithAuthSocial.displayName = getDisplayName(WrappedComponent, 'authSocial')

  return WithAuthSocial
}

export default authSocialWrapper
