import * as React from 'react'

import { getDisplayName } from 'hoc/helpers'
import purgeState from 'lib/helpers/purgeState'
import logger from 'lib/logger'

import { AuthConfig, InitialAuthProps } from './types'

const withAuthHelpers = ({
  configuredSocialProviders
}: AuthConfig) => (WrappedComponent: React.SFC<object>) => {
  const AuthHelpers: React.SFC<InitialAuthProps> = ({
    dispatch,
    clearSession,
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

    const hash = history.location.hash

    const purgeSession = () => dispatch(purgeState({ action: clearSession }))

    const shouldProcessAuth = /access_token|id_token|error/.test(history.location.hash)

    const getProvider = (val: string, nameOnly?: boolean) => {
      const validateProvider = (p) => val.includes(p)
      const provider = configuredSocialProviders.find(validateProvider)
      const socialProvider = provider && (
        (nameOnly && provider) ||
        `${provider}Username`
      )

      const key = socialProvider || 'email'

      return nameOnly ? {
        provider: key
      } : {
        [key]: val
      }
    }

    const authHelpers = {
      error,
      getProvider,
      hash,
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

  AuthHelpers.displayName = getDisplayName(WrappedComponent, 'authHelpers')

  return AuthHelpers
}

export default withAuthHelpers
