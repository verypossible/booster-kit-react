import { compose } from 'lib/helpers'

import { withRouter } from 'lib/router'

import connectState from '../connectState'

import authHelpers from './authHelpers'
import * as queries from './data'
import processCallback from './processCallback'
import providerAuth0Web from './providerAuth0Web'
import providerScaphold from './providerScaphold'

const { loginSocial, login, createUser, deleteUser, updateUser, forgotPassword } = queries

const withState = connectState(
  (selectors: Selectors) => ({
    session: selectors.getSession
  }),
  (actions: Actions) => ({
    clearSession: actions.clearSession,
    startSession: actions.startSession
  })
)

/* chained HOCs for Social Auth */
export const social = (config) => compose(
  withRouter,
  withState,
  loginSocial,
  updateUser,
  authHelpers(config),
  processCallback,
  deleteUser,
  providerAuth0Web(config)
)

/* chained HOCs for Scaphold Auth */
export const scaphold = (config) => compose(
  withRouter,
  withState,
  login,
  createUser,
  updateUser,
  forgotPassword,
  authHelpers(config),
  providerScaphold()
)

export const all = (config) => compose(
  withRouter,
  withState,
  login,
  loginSocial,
  createUser,
  updateUser,
  forgotPassword,
  authHelpers(config),
  processCallback,
  deleteUser,
  providerAuth0Web(config),
  providerScaphold()
)
