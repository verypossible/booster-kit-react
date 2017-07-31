import * as React from 'react'

import { AuthSocialProvider } from 'hoc/withAuth'

import { Box, Button, Span } from 'atoms'

const SocialLogin: React.SFC<AuthSocialProvider> = ({ authProvider, error }) => {
  return (
    <Box>
      <Button onClick={() => authProvider('google-oauth2')} icon='Google' type='social' background='#4285F4'>
        Google
      </Button>
      <Button onClick={() => authProvider('github')} icon='Github' iconColor='white' type='social' background='black'>
        Github
      </Button>
      {error && <Box><Span status='alert'>{error}</Span></Box>}
    </Box>
  )
}

export default SocialLogin
