import * as strategies from './strategies'
import * as WithAuth from './types'

export const auth0Config = {
  clientID: __AUTH_CID__,
  domain: __AUTH_URL__,
  redirectUri: __AUTH_REDIRECT_URI__,
  responseType: 'id_token',
  scope: 'openid profile offline_access'
} as WithAuth.Auth0Config

export const errors = {
  failedLogin: () => `We were unable to login you in.`,
  failedUpdate: ({ email }) => (`
    There is an existing account linked to ${email}.

    Your account was created with either email/password or another social provider. Please login,
    then link this social provider.
  `)
} as WithAuth.AuthErrors

const withAuthWrapper = ({
  callbackPath = '/callback',
  redirectOnError = '/login',
  redirectOnSuccess = '/profile',
  strategy = 'social'
}: WithAuth.AuthConfig = {}) => strategies[strategy]({
  auth0Config,
  callbackPath,
  configuredSocialProviders: ['google', 'github'],
  errors,
  redirectOnError,
  redirectOnSuccess,
  strategy
})

export { WithAuth }
export default withAuthWrapper
