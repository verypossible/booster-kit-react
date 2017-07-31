import * as React from 'react'

import { Box } from 'atoms'

import { SignUpForm, SocialLogin } from 'components/Authentication'

const SignUp = () => (
  <Box>
    <SignUpForm />
    <SocialLogin />
  </Box>
)

export default SignUp
