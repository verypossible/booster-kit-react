/* @flow */
import React from 'react'

import { LogIn } from 'features/Session'

const LogInRoute = () => (
  <LogIn />
)

export default [{
  pattern: '/login',
  component: LogInRoute,
  exactly: true
}]
