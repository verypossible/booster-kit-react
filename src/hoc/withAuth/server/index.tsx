import * as React from 'react'

import { getDisplayName } from 'hoc/helpers'

import { AuthConfig, AuthServerProps, AuthWithServer } from '../types'

const withAuthScaphold = ({
  redirectOnError,
  redirectOnSuccess
}: AuthConfig) => (WrappedComponent: React.SFC<AuthWithServer>) => {
  const ScapholdAuth: React.SFC<AuthServerProps> = ({
    authHelpers: { errors, purgeSession, redirect },
    createUser,
    forgotPassword,
    history,
    location,
    loginUser,
    storeSession,
    updateUser,
    ...props
  }) => {
    // ------------------------------------
    // Private
    // ------------------------------------
    const newSession = (user) => {
      const { id, username, token } = user
      storeSession({ email: username, id, token, username, sessionType: 'basic' })
      return user
    }

    // ------------------------------------
    // Public Methods
    // ------------------------------------
    const createAccount = (input) => createUser(input).then(
      ({ data: { createUser: { changedUser, token }}}) => newSession({ token, ...changedUser })
    )

    const login = (input) => loginUser(input).then(
      ({ data: { loginUser: { token, user }} }) => newSession({ token, ...user })
    )

    const logout = () => purgeSession()

    const updatePassword = (input) => updateUser(input)

    const recoverAccount = (input) => forgotPassword(input)

    const authProps = {
      createAccount,
      login,
      logout,
      recoverAccount,
      updatePassword
    }

    const passThruProps = {
      errors,
      history,
      location,
      redirect,
      redirectOnError,
      redirectOnSuccess
    }

    return (
      <WrappedComponent {...authProps} {...props} {...passThruProps} />
    )
  }

  ScapholdAuth.displayName = getDisplayName(WrappedComponent, 'scapholdAuth')

  return ScapholdAuth
}

export default withAuthScaphold
