import { reduxForm } from 'redux-form'

import { signUp } from 'modules/session'

import validate from './validate'
import SignUp from './component'

export default reduxForm({
  form: 'SignUp',
  onSubmit: signUp,
  validate
})(SignUp)
