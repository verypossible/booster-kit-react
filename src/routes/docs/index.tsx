import withSubRoutes from 'hoc/withSubRoutes'

import ExamplesRoutes from './examples'
import DocsLayout from './layout'
import DocHome from './root'

const DocRouteWithLayout = withSubRoutes(DocsLayout)

export default [{
  id: 'root-docs',
  path: '/docs',
  routeComponent: DocRouteWithLayout,
  routes: [{
    exact: true,
    id: 'docs-home',
    path: '/docs',
    routeComponent: DocHome
  },
    ...ExamplesRoutes
  ]
}] as RouteConfig[]
