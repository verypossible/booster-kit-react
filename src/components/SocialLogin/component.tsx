import * as React from 'react'

import { WithAuth } from 'hoc/withAuth'

import { Box, Button, Span } from 'atoms'

const SocialLogin: React.SFC<WithAuth.AuthSocialAPI> = ({ loginSocial, error }) => {
  return (
    <Box>
      <Button onClick={() => loginSocial('google-oauth2')} icon='Google' type='social' background='#4285F4'>
        Google
      </Button>
      <Button onClick={() => loginSocial('github')} icon='Github' iconColor='white' type='social' background='black'>
        Github
      </Button>
      {error && <Box><Span status='alert'>{error}</Span></Box>}
    </Box>
  )
}

export default SocialLogin
