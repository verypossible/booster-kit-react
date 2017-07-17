import * as React from 'react'

import { Button } from 'atoms'

interface LoginProps {
  authorizeSocial: () => void,
}

const Login: React.SFC<LoginProps> = ({ authorizeSocial }) => {
  return (
    <Button onClick={authorizeSocial}>
      Login
    </Button>
  )
}

export default Login
