import { ConnectedCounter } from 'components/Counter'
import { withSubRoutes } from 'lib/router'

import CounterLayout from './layout'

const CounterRoutes = withSubRoutes(CounterLayout)

export default [{
  id: 'route-counter',
  path: '/docs/counter',
  routeComponent: CounterRoutes,
  routes: [{
    exact: true,
    id: 'counter-home',
    path: '/docs/counter',
    routeComponent: ConnectedCounter
  }]
}]
