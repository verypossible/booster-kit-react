import { ConnectedCounter } from 'components/Counter'
import withSubRoutes from 'hoc/withSubRoutes'

import CounterLayout from './layout'

const CounterRoutes = withSubRoutes(CounterLayout)

export default [{
  id: 'route-counter',
  path: '/counter',
  routeComponent: CounterRoutes,
  routes: [{
    exact: true,
    id: 'counter-home',
    path: '/',
    routeComponent: ConnectedCounter
  }]
}]
