import callbackRoutes from './callback'
import homeRoute from './home'
import loginRoute from './login'
import profileRoute from './profile'
import signupRoute from './signup'

const routes = [
  ...callbackRoutes,
  ...homeRoute,
  ...loginRoute,
  ...profileRoute,
  ...signupRoute
]

export default routes
