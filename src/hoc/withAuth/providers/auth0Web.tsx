import Auth0JS from 'auth0-js'
import * as React from 'react'

import { getDisplayName } from 'hoc/helpers'
import logger from 'lib/logger'
import { Dispatch } from 'lib/types'

/*
  Documentation for using the Auth0 SDK for Web:
    https://auth0.com/docs/libraries/lock/v10

  Use this strategy if you don't care about controlling the user experience
  and you don't have a lot of additional fields to collect during registration.
*/

interface Auth0Web {
  scope?: string,
  responseMode?: string,
  responseType?: string,
  session: Session,
  sessionError: (error: object) => Dispatch<SessionActions>,
  startSession: (session: ActiveSession) => Dispatch<SessionActions>,
  clearSession: Dispatch<SessionActions>,
  location: {
    hash?: string
  },
  loginUser: (idToken: string) => void,
  history: {
    replace: (params: {
      pathname: string,
      state?: object
    }) => void
  }
}

const withAuth0Web = () => (WrappedComponent: React.SFC<object>) => {
  const cid = __AUTH_CID__
  const url = __AUTH_URL__
  const WebAuth: React.SFC<Auth0Web> = ({
    responseType = 'token id_token',
    scope = 'openid profile',
    session,
    sessionError,
    startSession,
    clearSession,
    history,
    location,
    loginUser,
    ...props
  }) => {
    /* Private Methods */
    const auth0 = new Auth0JS.WebAuth({
      clientID: cid,
      domain: url,
      redirectUri: __AUTH_REDIRECT_URI__,
      responseType,
      scope
    })

    const setLocation = (next) => history.replace(next)
    const setExpiration = (expiresIn) => ((expiresIn * 1000) + new Date().getTime())

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

    const handleAuthentication = () => {
      auth0.parseHash((err, authResult) => {
        process(authResult)

        if (err) {
          handleError(err, 'We were unable to authorize with your SSO provider.')
        }
      })
    }

    /* Public Methods */
    const authenticate = () => {
      /* Only call handle authentication if there is no session set */
      if (!session && /access_token|id_token|error/.test(location.hash)) {
        handleAuthentication()
      }
    }

    const authorizeSocial = ({ connection = 'google-oauth2' }) => auth0.authorize({ connection })

    const authorizeSocialWithPopup = () => auth0.popup.authorize({
      connection: 'google-oauth2'
    }, null)

    const buildAuthorizeUrl = (state: string) => (
      auth0.client.buildAuthorizeUrl({
        redirectUri: __AUTH_REDIRECT_URI__,
        state
      })
    )

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
