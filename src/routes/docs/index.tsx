import withSubRoutes from 'hoc/withSubRoutes'
import { DocsEntry } from 'lib/docs'

import ExamplesRoutes from './examples'
import DocsLayout from './layout'
const DocRouteWithLayout = withSubRoutes(DocsLayout)
export default [{
  id: 'root-docs',
  path: '/docs',
  routeComponent: DocRouteWithLayout,
  routes: [{
    exact: true,
    id: 'docs-home',
    path: '/docs',
    routeComponent: DocsEntry
  },
    ...ExamplesRoutes
  ]
}] as RouteConfig[]
