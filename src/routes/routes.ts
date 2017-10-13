import CallbackRoutes from './callback'
import ExampleRoutes from './examples'
import HomeRoute from './home'
import LoginRoute from './login'
import ProfileRoute from './profile'
import SignupRoute from './signup'

const baseRoutes = [
  ...CallbackRoutes,
  ...ExampleRoutes,
  ...HomeRoute,
  ...LoginRoute,
  ...ProfileRoute,
  ...SignupRoute
]

export default baseRoutes
