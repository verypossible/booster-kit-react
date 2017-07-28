import * as React from 'react'

import { RenderFieldSet } from 'components/Form'

const loginFields = () => [{
   label: 'Email',
   name: 'email',
   placeholder: 'you@company.com',
   type: 'email'
 }, {
   label: 'Password',
   name: 'password',
   type: 'password'
}]

/** Grab props passed through the LoginForm and pass them to loginFields to assign them to inputs */
const LoginForm = () => <RenderFieldSet fields={loginFields()} />

export default LoginForm
