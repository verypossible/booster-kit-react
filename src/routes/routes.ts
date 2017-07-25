import CallbackRoutes from './callback'
import DocsRoutes from './docs'
import HomeRoute from './home'
import LoginRoute from './login'
import SignupRoute from './signup'

const baseRoutes = [
  ...CallbackRoutes,
  ...HomeRoute,
  ...DocsRoutes,
  ...LoginRoute,
  ...SignupRoute
]

export default baseRoutes
