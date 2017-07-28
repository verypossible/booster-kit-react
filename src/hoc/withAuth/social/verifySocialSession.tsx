import * as React from 'react'

import { getDisplayName } from 'hoc/helpers'

import {
  VerifySocialSession,
  VerifySocialSessionProps
} from '../types'

/**
 *   Documentation for using the Auth0 SDK for Web:
 *     https://auth0.com/docs/libraries/auth0js
 *
 *  Use this recipe to strike a nice balance between complete control over the user experience,
 *  with a minimum amount of manual configuration.
 */
const verifySocialSessionWrapper = (WrappedComponent: React.SFC<VerifySocialSession>) => {
  const WithSocialVerification: React.SFC<VerifySocialSessionProps> = ({
    authHelpers: { errors, handleLoginFailure },
    loginSocialUser,
    storeSession,
    ...props
  }) => {
    const verifySocialSession = (idToken: string) => loginSocialUser({ idToken })
      .then(({ data: { loginUserWithAuth0: { user: { avatar, email, id, name, username  } } }}) => {
        const newSession = { avatar, email, id, name, username, sessionType: 'social', token: idToken }
        storeSession(newSession)
        return newSession
      })
      .catch((error) => handleLoginFailure({ error, reason: errors.tokenExpired() }))

    return (
      <WrappedComponent verifySocialSession={verifySocialSession} {...props} />
    )
  }

  WithSocialVerification.displayName = getDisplayName(WrappedComponent, 'verifySocial')

  return WithSocialVerification
}

export default verifySocialSessionWrapper
