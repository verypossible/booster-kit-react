import {
  AuthSocialProvider,
  AuthWithServer,
  AuthWithSocial,
  LogoutWithSocial,
  PublicAuthConfig,
  VerifySocialSession
} from './types'

import connectState from 'hoc/connectState'
import { compose } from 'lib/helpers'
import { withRouter } from 'lib/router'

import helpers from './helpers'
import * as queries from './queries'
import serverAuth from './server'
import {
  auth0Config,
  authProvider,
  socialAuth,
  socialLogout,
  socialSessionVerification
} from './social'

const {
  loginSocial,
  login,
  createUser,
  deleteUser,
  updateUser,
  forgotPassword
} = queries

/** Shared HOCS all strategies depend upon */
const common = config =>
  compose(
    withRouter,
    connectState(
      (selectors: Selectors) => ({
        session: selectors.getSession
      }),
      (actions: Actions) => ({
        storeSession: actions.startSession
      })
    ),
    helpers(config)
  )

/** chained HOCs for initializing authentication with a social provider */
export const authSocialProvider = compose(
  withRouter,
  authProvider({ auth0Config })
)

/** chained HOCs for terminating a session with a social provider */
export const logoutWithSocial = compose(socialLogout({ auth0Config }))

/** chained HOCs for verifying a social session from state rehydration */
export const verifySocialSession = ({
  redirectOnError = '/login'
}: PublicAuthConfig = {}) =>
  compose(common({ redirectOnError }), loginSocial, socialSessionVerification)

/** chained HOCs for processing login / create with a social provider */
export const authWithSocial = ({
  callbackPath = '/callback',
  redirectOnError = '/login',
  redirectOnSuccess = '/profile'
}: PublicAuthConfig = {}) =>
  compose(
    common({ configuredSocialProviders: ['github', 'google'] }),
    loginSocial,
    updateUser,
    deleteUser,
    socialAuth({
      auth0Config,
      callbackPath,
      redirectOnError,
      redirectOnSuccess
    })
  )

/** chained HOCs for Scaphold Auth */
export const authWithServer = ({
  redirectOnError = '/login',
  redirectOnSuccess = '/profile'
}: PublicAuthConfig) =>
  compose(
    common({ redirectOnError, redirectOnSuccess }),
    login,
    createUser,
    forgotPassword,
    serverAuth({
      redirectOnError,
      redirectOnSuccess
    })
  )

export {
  AuthSocialProvider,
  AuthWithSocial,
  AuthWithServer,
  LogoutWithSocial,
  VerifySocialSession
}
