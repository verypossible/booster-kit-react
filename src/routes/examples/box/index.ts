import withSubRoutes from 'hoc/withSubRoutes'

import BoxLayout from './layout'

export default [{
  id: 'route-box',
  path: '/examples/box',
  routeComponent: BoxLayout
}] as RouteConfig[]
