import Auth0JS from 'auth0-js'
import * as React from 'react'

import { getDisplayName } from 'hoc/helpers'
import logger from 'lib/logger'
import { Redirect } from 'lib/router'
import { Dispatch } from 'lib/types'

interface Auth0Web {
  scope?: string,
  responseMode?: string,
  responseType?: string,
  session: Session,
  startSession: Dispatch<SessionActions>,
  clearSession: Dispatch<SessionActions>,
  location: object,
  history: object
}

/*
  Documentation for using the Auth0 SDK for Web:
    https://auth0.com/docs/libraries/lock/v10

  Use this strategy if you don't care about controlling the user experience
  and you don't have a lot of additional fields to collect during registration.
*/
const withAuth0Web = (WrappedComponent: React.SFC<object>) => {
  const cid = __AUTH_CID__
  const url = __AUTH_URL__
  const WebAuth: React.SFC<Auth0Web> = ({
    responseMode = 'form_post',
    responseType = 'token',
    scope = 'openid profile',
    session,
    startSession,
    clearSession,
    location,
    history,
    ...props
  }) => {
    const auth0 = new Auth0JS.WebAuth({
      clientID: cid,
      domain: url,
      redirectUri: __AUTH_REDIRECT_URI__,
      responseMode,
      responseType,
      scope
    })

    const login = ({ connection = 'google-oauth2' }) => auth0.authorize({ connection })

    const loginWithPopup = () => auth0.popup.authorize({
      connection: 'google-oauth2'
    }, null)

    const authorizeUrl = (state: string) => (
      auth0.client.buildAuthorizeUrl({
        redirectUri: __AUTH_REDIRECT_URI__,
        state
      })
    )

    const handleAuthentication = () => {
      auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
          auth0.client.userInfo(authResult.accessToken, (userErr, user) => {
            logger.log.info('user error', { ...userErr })
            // Now you have the user's information
            logger.log.info('Auth Success', {
              accessToken: authResult.accessToken,
              expiresAt,
              idToken: authResult.idToken,
              ...user
            })
            return <Redirect to='/' />
          })
        } else if (err) {
          logger.log.error('Auth Error', { error: err })
          return <Redirect to='/' />
        }
      })
    }

    const authProps = {
      authorizeUrl,
      handleAuthentication,
      login,
      loginWithPopup
    }

    return (
      <WrappedComponent {...authProps} {...props} />
    )
  }

  WebAuth.displayName = getDisplayName(WrappedComponent, 'withAuth0Web')

  return WebAuth
}

export default withAuth0Web
