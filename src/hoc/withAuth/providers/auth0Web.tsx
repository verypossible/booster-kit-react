import Auth0JS from 'auth0-js'
import * as React from 'react'

import { getDisplayName } from 'hoc/helpers'
import logger from 'lib/logger'

import { Auth0Web } from './WebAuth'

/*
  Documentation for using the Auth0 SDK for Web:
    https://auth0.com/docs/libraries/auth0js

  Use this recipe to strike a nice balance between complete control over the user experience,
  with a minimum amount of manual configuration.
*/

const withAuth0Web = () => (WrappedComponent: React.SFC<object>) => {
  const cid = __AUTH_CID__
  const url = __AUTH_URL__
  const WebAuth: React.SFC<Auth0Web> = ({
    clearSession,
    history,
    location,
    loginUser,
    responseType = 'token id_token',
    scope = 'openid profile',
    session,
    sessionError,
    startSession,
    ...props
  }) => {
    // ------------------------------------
    // Private Methods
    // ------------------------------------

    /* Initialize a new Auth0 WebAuth Object */
    const auth0 = new Auth0JS.WebAuth({
      clientID: cid,
      domain: url,
      redirectUri: __AUTH_REDIRECT_URI__,
      responseType,
      scope
    })

    /* Navigate using React Router's History */
    const setLocation = (next) => history.replace(next)

    /* When we should force renewal */
    const setExpiration = (expiresIn) => ((expiresIn * 1000) + new Date().getTime())

    /* Error handler helper that dispatches the error to state, logs it to Rollbar, and redirects to the target
        with the error message attached to the location state. This simplifies the logic for conditionally showing
        errors as we can simply operate on the location state.
     */
    const handleError = (error, reason) => {
      sessionError({ error })
      logger.log.error('Authorization Failure - Client Data', { error })
      setLocation({
        pathname: '/login',
        state: {
          error: {
            reason,
            type: 'unauthorized'
          }
        }
      })
    }

    /* Takes the initial authResult and gets the user data from the targeted social service.
       If successful, it dispatches the session data to state, calls the graphql mutation, and
       redirects to the login page with a successful state set.
    */
    const process = (authResult) => (
      authResult && authResult.accessToken && authResult.idToken &&
      auth0.client.userInfo(authResult.accessToken, (error, user) => {
        if (error) {
          handleError(error, 'We were unable to get your information from your SSO provider.')
        }

        startSession({
          email: user.email,
          expiresAt: setExpiration(authResult.expiresIn),
          idToken: authResult.idToken,
          name: user.name,
          picture: user.picture
        })

        loginUser(authResult.idToken)

        setLocation({
          pathname: '/login',
          state: {
            authorized: true
          }
        })
      })
    )

    /* A wrapped to handle errors with the initial authorize request */
    const handleAuthentication = () => {
      auth0.parseHash((err, authResult) => {
        process(authResult)

        if (err) {
          handleError(err, 'We were unable to authorize with your SSO provider.')
        }
      })
    }

    // ------------------------------------
    // Private Methods
    // ------------------------------------

    /* The entry point for processing authentication on those routes set as authorized Redirect URIs within
       Auth0.
    */
    const authenticate = () => {
      const matchingHash = /access_token|id_token|error/.test(location.hash)

      if (!session && matchingHash) {
        handleAuthentication()
      }
    }

    /* This initializes an authentication flow on the targeted connection. If all goes well,
      it will automatically redirect to the __AUTH_REDIRECT_URI__ where authenticate() will take over.
    */
    const authorizeSocial = ({ connection = 'google-oauth2' }) => auth0.authorize({ connection })

    /* If you don't want to use Auth0's hosted auth page.
      !Warning: This flow has not been thoroughly tested. Read the Auth0 docs to verify configuration

    */
    const authorizeSocialWithPopup = () => auth0.popup.authorize({
      connection: 'google-oauth2'
    }, null)

    /* Used in conjunction with popup auth flows - a simple helper to build a valid auth query / URL */
    const buildAuthorizeUrl = (state: string) => (
      auth0.client.buildAuthorizeUrl({
        redirectUri: __AUTH_REDIRECT_URI__,
        state
      })
    )

    /* Dispatches clearSession() tp clean out the session state, then logs out of Auth0 and redirects */
    const logout = ({ returnTo = '/' }) => {
      clearSession()

      auth0.logout({
        clientID: cid,
        returnTo
      })
    }

    /* A helper to renew auth Keys. If you aren't using Auth0's hosted login page, see the notes and warnings
      on renewAuth()'s typings.
    */
    const renewAuth = () => auth0.renewAuth({
      redirectUri: __AUTH_REDIRECT_URI_SILENT__,
      scope,
      usePostMessage: true
    }, (err, authResult) => {
      process(authResult)

      if (err) {
        handleError(err, 'We were unable to automatically renew your authorization token. Please login again.')
      }
    })

    const authProps = {
      authenticate,
      authorizeSocial,
      authorizeSocialWithPopup,
      buildAuthorizeUrl,
      logout,
      renewAuth
    }

    return (
      <WrappedComponent {...authProps} {...props} />
    )
  }

  WebAuth.displayName = getDisplayName(WrappedComponent, 'withAuth0Web')

  return WebAuth
}

export default withAuth0Web
