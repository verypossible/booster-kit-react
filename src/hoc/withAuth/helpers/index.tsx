import jwtDecode from 'jwt-decode'
import * as React from 'react'
import S from 'string'

import { getDisplayName } from 'hoc/helpers'
import purgeState from 'lib/helpers/purgeState'
import logger from 'lib/logger'

import { AuthConfig, AuthErrors, AuthHelpers, CommonProps, UserFromToken } from '../types'

export const findProvider = (val, configuredProviders) => {
  if (typeof val === 'string') {
    const provider = configuredProviders.find((p) => val.includes(p))
    return { [`${provider}Username`]: val }
  }
}

export const errors = {
  failedLogin: () => `We were unable to login you in.`,
  failedSignup: () => 'Ruh Roh. We ran into some trouble trying to create your account.',
  failedUpdate: ({ email }) => (`
    There is an existing account linked to ${email}.

    Your account was created with either email/password or another social provider. Please login,
    then link this social provider.
  `),
  tokenExpired: () => 'It looks like your session expired. Please login to start a new session.'
} as AuthErrors

export const parseUserFromToken = (hash: string) => new Promise<UserFromToken>((resolve) => {
  const idToken = S(hash).between('#id_token=', '&').s
  const userFromToken = jwtDecode(idToken)
  const { picture, email, exp, name, user_id } = userFromToken
  resolve({
    idToken,
    user: {
      avatar: picture,
      email,
      expiresAt: exp,
      name
    },
    username: user_id
  })
})

const withAuthHelpers = ({
  configuredSocialProviders,
  redirectOnError
}: AuthConfig) => (
  WrappedComponent: React.SFC<AuthHelpers>
) => {
  const mergeAuthHelpers: React.SFC<CommonProps> = ({
    history,
    location,
    ...props
  }) => {
    // ------------------------------------
    // Public Methods
    // ------------------------------------
    const redirect = ({ pathname, state }) => history.replace(pathname, state)

    const logError = (err) => {
      logger.log.error(err.reason, { ...err.error })
    }

    const error = location.state && location.state.error

    const purgeSession = () => purgeState()

    const getProvider = (val) => findProvider(val, configuredSocialProviders)

    const getUserFromToken = () => parseUserFromToken(history.location.hash)

    const shouldProcessAuth = /access_token|id_token|error/.test(history.location.hash)

    const handleLoginFailure = (err) => {
      logError({ error: err.error, reason: err.reason })
      redirect({ pathname: redirectOnError, state: { error: err.reason } })
    }

    const authHelpers = {
      error,
      errors,
      getProvider,
      getUserFromToken,
      handleLoginFailure,
      logError,
      purgeSession,
      redirect,
      shouldProcessAuth
    }

    const passThruProps = {
      history,
      location
    }

    return (
      <WrappedComponent authHelpers={authHelpers} {...props} {...passThruProps} />
    )
  }

  mergeAuthHelpers.displayName = getDisplayName(WrappedComponent, 'authHelpers')

  return mergeAuthHelpers
}

export default withAuthHelpers
