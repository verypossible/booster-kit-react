import { compose } from 'lib/helpers'

import { withRouter } from 'lib/router'

import connectState from '../connectState'

import authHelpers from './authHelpers'
import * as queries from './data'
import providerAuth0Web from './providerAuth0Web'
import providerScaphold from './providerScaphold'

const { loginSocial, login, createUser, deleteUser, updateUser, forgotPassword } = queries

/** Shared HOCS all strategies depend upon */
const common = (config) => compose(
  withRouter,
  connectState(
    (selectors: Selectors) => ({
      session: selectors.getSession
    }),
    (actions: Actions) => ({
      startSession: actions.startSession
    })
  ),
  updateUser,
  deleteUser,
  authHelpers(config)

)

/** chained HOCs for Social Auth */
export const social = (config) => compose(
  common(config),
  loginSocial,
  providerAuth0Web(config)
)

/** chained HOCs for Scaphold Auth */
export const scaphold = (config) => compose(
  common(config),
  login,
  createUser,
  forgotPassword,
  providerScaphold()
)

/** chained HOCs for Scaphold & Social Auth */
export const all = (config) => compose(
  common(config),
  login,
  loginSocial,
  createUser,
  forgotPassword,
  providerAuth0Web(config),
  providerScaphold()
)
