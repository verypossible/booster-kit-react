import * as React from 'react'

import { getDisplayName } from 'hoc/helpers'

const withAuthScaphold = () => (WrappedComponent: React.SFC<object>) => {
  const ScapholdAuth: React.SFC<any> = ({
    createUser,
    forgotPassword,
    handleError,
    history,
    location,
    loginUser,
    purgeSession,
    redirect,
    redirectTo = '/',
    startSession,
    updateUser,
    ...props
  }) => {
    // ------------------------------------
    // Private Methods
    // ------------------------------------
    const handleSuccess = (user) => redirect({
      pathname: redirectTo,
      state: { authorized: true, user }
    })
    // ------------------------------------
    // Public Methods
    // ------------------------------------
    const createAccount = (input) => createUser(input).then(
      (user) => { handleSuccess(user) },
      (error) => { handleError({ error, reason: 'There was a problem creating your account' })}
    )

    const login = (input) => loginUser(input).then(
      (user) => {
        startSession(user)
        handleSuccess(user)
      },
      (error) => { handleError({ error, reason: 'There was a problem logging in to your account' })}
    )

    const logout = () => purgeSession()

    const updatePassword = (input) => updateUser(input).then(
      (user) => redirect({ pathname: history.location.pathname, state: { passwordUpdated: true, user }  })
    )

    const recoverAccount = (input) => forgotPassword(input).then(
      (user) => redirect({ pathname: redirectTo, state: { passwordRecovered: true, user } })
    )

    const authProps = {
      createAccount,
      login,
      logout,
      recoverAccount,
      updatePassword
    }

    const passThruProps = {
      location
    }

    return (
      <WrappedComponent {...authProps} {...props} {...passThruProps} />
    )
  }

  ScapholdAuth.displayName = getDisplayName(WrappedComponent, 'scapholdAuth')

  return ScapholdAuth
}

export default withAuthScaphold
