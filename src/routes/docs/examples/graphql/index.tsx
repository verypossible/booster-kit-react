import withSubRoutes from 'hoc/withSubRoutes'

import GraphqlLayout from './layout'
import GraphqlHome from './root'

const GraphqlRoutes = withSubRoutes(GraphqlLayout)

export default [{
  id: 'route-graphql',
  path: '/docs/examples/graphql',
  routeComponent: GraphqlRoutes,
  routes: [{
    exact: true,
    id: 'graphql-home',
    path: '/docs/examples/graphql',
    routeComponent: GraphqlHome
  }]
}]
