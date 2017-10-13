import * as Auth0JS from 'auth0-js'
import * as React from 'react'

import { getDisplayName } from 'hoc/helpers'

import { AuthConfig, LogoutWithSocial } from '../types'

const logoutSocialWrapper = ({
  auth0Config
}: AuthConfig) => (WrappedComponent: React.SFC<LogoutWithSocial>) => {
  const WithLogoutSocial: React.SFC<object> = props => {
    const auth0 = new Auth0JS.WebAuth(auth0Config)

    const logoutSocial = () => {
      auth0.logout({
        clientID: __AUTH_CID__
      })
    }

    return (
      <WrappedComponent logoutSocial={logoutSocial} {...props} />
    )
  }

  WithLogoutSocial.displayName = getDisplayName(WrappedComponent, 'loginSocial')

  return WithLogoutSocial
}

export default logoutSocialWrapper
