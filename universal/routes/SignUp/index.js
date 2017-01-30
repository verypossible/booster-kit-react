/* @flow */
import React from 'react'

import { SignUp } from 'features/Session'

const SignUpRoute = () => (
  <SignUp />
)

export default [{
  pattern: '/signup',
  component: SignUpRoute,
  exactly: true
}]
