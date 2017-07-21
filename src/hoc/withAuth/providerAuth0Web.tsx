import Auth0JS from 'auth0-js'
import * as React from 'react'

import { getDisplayName } from 'hoc/helpers'

import { AuthConfig, AuthSocial } from './types'

/*
  Documentation for using the Auth0 SDK for Web:
    https://auth0.com/docs/libraries/auth0js

  Use this recipe to strike a nice balance between complete control over the user experience,
  with a minimum amount of manual configuration.
*/

const authSocialWrapper = ({
  auth0Config,
  callbackPath,
  errors,
  redirectOnError,
  redirectOnSuccess
}: AuthConfig) => (WrappedComponent: React.SFC<object>) => {
  const WithAuthSocial: React.SFC<AuthSocial> = ({
    deleteUser,
    getProvider,
    logError,
    loginSocialUser,
    purgeSession,
    redirect,
    shouldProcessAuth,
    startSession,
    updateUser,
    userFromToken,
    ...props
  }) => {
    // ------------------------------------
    // Private Methods
    // ------------------------------------

    /* Initialize a new Auth0 WebAuth Object */
    const auth0 = new Auth0JS.WebAuth(auth0Config)

    /*
      Logs the user in to the GraphQL Service with the user's idToken,
      then sets the idToken in location state for Apollo Client to consume
      for all future requests and returns the payload for updating the user.
    */
    const loginUserWithSocial = ({ idToken, user }) => loginSocialUser({ idToken })
      .then(
        ({ data }) => {
          redirect({
            pathname: callbackPath,
            state: {
              token: idToken
            }
          })

          const userData = {
            avatar: user.picture,
            email: user.email,
            expiresAt: user.exp,
            id: data.loginUserWithAuth0.user.id,
            name: user.name,
            serviceId: user.user_id,
            token: idToken,
            username: user.email,
            ...getProvider(user.user_id)
          }

          startSession(userData)
          return userData
        },
        ((error) => {
          const reason = errors.failedLogin()
          logError({ error, reason })
          return { error: reason }
        })
      )

    /* Deletes the user immediately if the email is associated to another account */
    const deleteDuplicateUser = ({ error, serviceId, user }) => deleteUser(user.id)
      .then(() => {
        const providerName = getProvider(serviceId, true).provider
        const reason = errors.failedUpdate({ email: user.email, providerName })

        logError({
          error,
          reason
        })
        return { error: reason }
      })

    /*
      Updates the user model with data from the Social service.
      If the email from the social provider matches an existing email on an account,
      we immediately delete the user and return an error.

      We do this for two reasons:
        1. It prevents user's from creating multiple accounts, then being unable to link them together.
        2. In order to lock things down, users can only change fields on their own account and they cannot
           read fields from any other user, so we rely on the server to tell us whether or not the email is
           unique, then remove the temporary account.
    */
    const updateUserWithSocialData = ({ serviceId, token, ...user }) => updateUser(user)
      .then(
        ({ data }) => {
          const authedUser = { token, user: data.updateUser.changedUser }
          return authedUser
        },
        (error) => deleteDuplicateUser({ error, serviceId, user })
      )

    /* A wrapped to handle errors with the initial authorize request */
    const handleSocialAuth = () => {
      loginUserWithSocial(userFromToken)
        .then(updateUserWithSocialData)
        .then((result) => {
          return redirect({
            pathname: result.user ? redirectOnSuccess : redirectOnError,
            state: { ...result }
          })
        })
    }

    // ------------------------------------
    // Public Methods
    // ------------------------------------
    /* The entry point for processing authentication on those routes set as authorized Redirect URIs within
       Auth0.
    */
    const authenticate = () => {
      if (shouldProcessAuth) {
        handleSocialAuth()
      }
    }

    const loginSocial = (connection: string) => auth0.authorize({ connection })

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
