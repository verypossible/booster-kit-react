import { reduxForm } from 'redux-form'

import { logIn } from 'modules/session'

import validate from './validate'
import Login from './component'

export default reduxForm({
  form: 'SignIn',
  onSubmit: logIn,
  validate
})(Login)
