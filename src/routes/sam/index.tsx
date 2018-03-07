import * as React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'

import { loginContainer, verifyContainer } from './container'
import { ConnectedForm, fieldMap, IForm } from './form'

interface ILocation {
  state?: {
    loggedIn?: boolean
  }
}

const verifyFields = [
  {
    name: 'code',
    type: 'text'
  }
]

const Verify = verifyContainer((props: IForm) => (
  <ConnectedForm onSuccess={<Redirect to="/" />} buttonText="Login" {...props}>
    {fieldMap(verifyFields)}
  </ConnectedForm>
))

const loginSuccess = (
  <Redirect to={{ pathname: '/sam', state: { loggedIn: true } }} />
)

const loginFields = [
  {
    name: 'email',
    type: 'email'
  },
  {
    name: 'password',
    type: 'password'
  }
]

const Login = loginContainer((props: IForm) => (
  <ConnectedForm onSuccess={loginSuccess} buttonText="Login" {...props}>
    {fieldMap(loginFields)}
  </ConnectedForm>
))

const isLoggedIn = ({ state }: ILocation) => state && state.loggedIn

const SamsForm: React.SFC<RouteComponentProps<{}>> = ({ location }) =>
  (isLoggedIn(location) && <Verify />) || <Login />

export default [
  {
    exact: true,
    id: 'sam',
    path: '/sam',
    routeComponent: SamsForm
  }
]
