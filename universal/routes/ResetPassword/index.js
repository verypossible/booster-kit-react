/* @flow */
import React from 'react'

import { ResetPassword } from 'features/Session'

const ResetPasswordRoute = () => (
  <ResetPassword />
)

export default [{
  pattern: '/reset-password',
  component: ResetPasswordRoute,
  exactly: true
}]
