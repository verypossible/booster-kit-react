import CallbackRoutes from './callback'
import DocsRoutes from './docs'
import HomeRoute from './home'
import LoginRoute from './login'

export default [
  ...CallbackRoutes,
  ...HomeRoute,
  ...DocsRoutes,
  ...LoginRoute
]
