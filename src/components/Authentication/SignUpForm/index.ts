import { authWithServer, AuthWithServer } from 'hoc/withAuth'
import withForm from 'hoc/withForm'
import { compose } from 'lib/helpers'

import SignUpForm from './component'

/** Container */
export const handleSubmit: HandleSubmit<
  AuthForm,
  AuthWithServer,
  AuthFormError
> = ({
  values: { email, password },
  props: { createAccount, errors, redirect, redirectOnSuccess },
  submitError
}) =>
  createAccount({ email, password, passwordSet: true, username: email }).then(
    ({ token, ...user }) =>
      redirect({ pathname: redirectOnSuccess, state: { token, user } }),
    error =>
      submitError({
        errors: { _error: errors.failedSignup() },
        response: error
      })
  )

const enhance = compose(
  authWithServer({
    redirectOnError: '/signup'
  }),
  withForm({
    form: 'signUp',
    handleSubmit
  })
)

export default enhance(SignUpForm)
