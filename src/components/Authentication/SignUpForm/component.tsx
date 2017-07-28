import * as React from 'react'

import { RenderFieldSet } from 'components/Form'

const signupFields = () => [{
  label: 'Email',
  name: 'email',
  placeholder: 'you@company.com',
  type: 'email'
}, {
  label: 'Password',
  name: 'password',
  type: 'password'
}, {
  label: 'Confirm Password',
  name: 'confirmPassword',
  type: 'password'
}]

/** Grab props passed through the SignUpForm and pass them to signupFields to assign them to inputs */
const SignUpForm = () => <RenderFieldSet fields={signupFields()} />

export default SignUpForm
