import jwtDecode from 'jwt-decode'
import * as React from 'react'
import S from 'string'

import { getDisplayName } from 'hoc/helpers'
import purgeState from 'lib/helpers/purgeState'
import logger from 'lib/logger'

import { AuthConfig, AuthHelpers, InitialProps, UserFromToken } from './types'

export const parseUserFromToken = (hash: string) => new Promise<UserFromToken>((resolve) => {
  const idToken = S(hash).between('#id_token=', '&').s
  const userFromToken = jwtDecode(idToken)
  resolve({ idToken, userFromToken })
})

export const findProvider = (val, configuredProviders) => {
  if (typeof val === 'string') {
    const provider = configuredProviders.find((p) => val.includes(p))
    return { [`${provider}Username`]: val }
  }
}

const withAuthHelpers = ({
  configuredSocialProviders
}: AuthConfig) => (
  WrappedComponent: React.SFC<AuthHelpers>
) => {
  const mergeAuthHelpers: React.SFC<InitialProps> = ({
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

    const getUserFromToken = () => parseUserFromToken(history.location.hash)
    const getProvider = (val) => findProvider(val, configuredSocialProviders)

    const purgeSession = () => purgeState()

    const shouldProcessAuth = /access_token|id_token|error/.test(history.location.hash)

    const authHelpers = {
      error,
      getProvider,
      getUserFromToken,
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
      <WrappedComponent {...authHelpers} {...props} {...passThruProps} />
    )
  }

  mergeAuthHelpers.displayName = getDisplayName(WrappedComponent, 'authHelpers')

  return mergeAuthHelpers
}

export default withAuthHelpers
