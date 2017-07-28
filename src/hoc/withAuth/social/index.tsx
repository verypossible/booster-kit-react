import { Auth0Config } from '../types'

import authProvider from './authProvider'
import socialAuth from './authSocial'
import socialLogout from './logoutSocial'
import socialSessionVerification from './verifySocialSession'

const auth0Config = {
  clientID: __AUTH_CID__,
  domain: __AUTH_URL__,
  redirectUri: __AUTH_REDIRECT_URI__,
  responseType: 'id_token',
  scope: 'openid profile offline_access'
} as Auth0Config

export {
  auth0Config,
  authProvider,
  socialAuth,
  socialLogout,
  socialSessionVerification
}
