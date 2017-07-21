import * as strategies from './strategies'
import * as WithAuth from './types'

const auth0Config = {
  clientID: __AUTH_CID__,
  domain: __AUTH_URL__,
  redirectUri: __AUTH_REDIRECT_URI__,
  responseType: 'id_token',
  scope: 'openid profile offline_access'
} as WithAuth.Auth0Config

const errors = {
  failedLogin: () => `We were unable to login you in.`,
  failedUpdate: ({ email, providerName }) => (`
    There is an existing account linked to ${email}.

    Your account was created with ${providerName}. Please login,
    then link this social provider.
  `)
} as WithAuth.AuthErrors

const defaultConfig = {
  callbackPath: '/callback',
  redirectOnError: '/login',
  redirectOnSuccess: '/profile',
  strategy: 'social'
} as WithAuth.AuthConfig

const withAuthWrapper = (setup = defaultConfig) => strategies[setup.strategy]({
  auth0Config,
  configuredSocialProviders: ['google', 'github'],
  errors,
  ...setup
})

export { WithAuth }
export default withAuthWrapper
