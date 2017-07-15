import * as React from 'react'

import { Dispatch } from 'lib/types'

import { Button } from 'atoms'

interface LoginProps {
  login: () => void,
}

const Login: React.SFC<LoginProps> = ({ login }) => {
  return (
    <Button onClick={login}>
      Login
    </Button>
  )
}

export default Login
