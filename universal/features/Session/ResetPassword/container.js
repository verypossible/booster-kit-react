import { reduxForm } from 'redux-form'

import { resetPassword } from 'modules/session'

import validate from './validate'
import ResetPassword from './component'

export default reduxForm({
  form: 'SignIn',
  onSubmit: resetPassword,
  validate
})(ResetPassword)
