import CallbackRoutes from './callback'
import DocsRoutes from './docs'
import HomeRoute from './home'
import LoginRoute from './login'
import ProfileRoute from './profile'
import SignupRoute from './signup'

const baseRoutes = [
  ...CallbackRoutes,
  ...DocsRoutes,
  ...HomeRoute,
  ...LoginRoute,
  ...ProfileRoute,
  ...SignupRoute
]

export default baseRoutes
