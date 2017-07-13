import withSubRoutes from 'hoc/withSubRoutes'
import SidebarWithNav from 'layouts/SidebarWithNav'

import CounterRoutes from './counter'
import GraphqlRoutes from './graphql'
import ExampleHome from './root'

const ExampleRoutesWithLayout = withSubRoutes(SidebarWithNav)

export default [{
  id: 'root-docs',
  path: '/docs',
  routeComponent: ExampleRoutesWithLayout,
  routes: [{
    exact: true,
    id: 'docs-home',
    path: '/docs',
    routeComponent: ExampleHome
  },
    ...CounterRoutes,
    ...GraphqlRoutes
  ]
}]
