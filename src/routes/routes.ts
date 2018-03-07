import CallbackRoutes from './callback'
import DocsRoutes from './docs'
import HomeRoute from './home'
import LoginRoute from './login'
import ProfileRoute from './profile'
import SamsRoute from './sam'
import SignupRoute from './signup'

const baseRoutes = [
  ...CallbackRoutes,
  ...DocsRoutes,
  ...HomeRoute,
  ...LoginRoute,
  ...ProfileRoute,
  ...SamsRoute,
  ...SignupRoute
]

export default baseRoutes
