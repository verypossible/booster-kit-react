import withSubRoutes from 'hoc/withSubRoutes'

import CardLayout from './layout'
import CardHome from './root'

const CardRoutes = withSubRoutes(CardLayout)

export default [{
  id: 'route-card',
  path: '/docs/card',
  routeComponent: CardRoutes,
  routes: [{
    exact: true,
    id: 'card-home',
    path: '/docs/card',
    routeComponent: CardHome
  }]
}]
