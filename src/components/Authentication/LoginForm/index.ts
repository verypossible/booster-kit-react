import { authWithServer, AuthWithServer } from 'hoc/withAuth'
import withForm from 'hoc/withForm'
import { compose } from 'lib/helpers'

import LoginForm from './component'

export const handleSubmit: HandleSubmit<AuthForm, AuthWithServer, AuthFormError> = ({
  values: { email, password },
  props: { login, errors, redirect, redirectOnSuccess },
  submitError
}) => (
  login({ password, username: email })
    .then(
      ({ token, ...user }) =>
        redirect({ pathname: redirectOnSuccess, state: { token, user }}),
      (error) => submitError({
        errors: { _error: errors.failedLogin() },
        response: error
      })
    )
)

const enhance = compose(
  authWithServer({
    redirectOnError: '/signup'
  }),
  withForm({
    form: 'login',
    handleSubmit
  })
)

export default enhance(LoginForm)
