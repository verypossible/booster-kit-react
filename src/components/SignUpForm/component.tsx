import * as React from 'react'

import { FieldSet } from 'atoms/Form'
import { Input } from 'components/Form'

const inputs = [{
  label: 'Email'
  name: 'email',
  placeholder: 'you@company.com',
  type: 'email'
}, {
  label: 'Password'
  name: 'password',
  type: 'password'
}, {
  label: 'Confirm Password'
  name: 'confirmPassword',
  type: 'password'
}]

const SignUpForm = () => (
  <FieldSet>
    {inputs.map((input) => <Input key={input.name} {...input} />)}
  </FieldSet>
)

export default SignUpForm
