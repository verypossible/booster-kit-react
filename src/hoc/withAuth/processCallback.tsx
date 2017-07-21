import jwtDecode from 'jwt-decode'
import * as React from 'react'
import S from 'string'

import { AuthHelpers, InitialAuthProps } from './types'

const processCallbackWrapper = (WrappedComponent: React.SFC<object>) => {
  const ProcessCallback: React.SFC<InitialAuthProps & AuthHelpers> = ({
    hash,
    shouldProcessAuth,
    ...props
  }) => {
    let userFromToken = {}

    const getUserFromToken = () => {
      const idToken = S(hash).between('#id_token=', '&').s
      const user = jwtDecode(idToken)
      userFromToken = Object.assign({}, { idToken, user })
    }

    if (shouldProcessAuth) {
      getUserFromToken()
    }

    const callbackResults = {
      userFromToken
    }

    const passThruProps = {
      shouldProcessAuth
    }

    return <WrappedComponent {...callbackResults} {...passThruProps} {...props} />
  }

  return ProcessCallback
}

export default processCallbackWrapper
