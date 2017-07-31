import * as React from 'react'

import { Box } from 'atoms'

import { LoginForm, SocialLogin } from 'components/Authentication'

const LoginPage = () => (
  <Box>
    <LoginForm />
    <SocialLogin />
  </Box>
)

export default LoginPage
