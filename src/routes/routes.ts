import CallbackRoutes from './callback'
import HomeRoute from './home'
import LoginRoute from './login'
import ProfileRoute from './profile'
import SignupRoute from './signup'

const baseRoutes = [
  ...CallbackRoutes,
  ...HomeRoute,
  ...LoginRoute,
  ...ProfileRoute,
  ...SignupRoute
]

export default baseRoutes
