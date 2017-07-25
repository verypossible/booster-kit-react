import withSubRoutes from 'hoc/withSubRoutes'
import SidebarWithNav from 'layouts/SidebarWithNav'

import CounterRoutes from './counter'
import MarkdownRoutes from './markdown'
import CardRoutes from './card'
import DocHome from './root'

const DocRouteWithLayout = withSubRoutes(SidebarWithNav)

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
    ...CounterRoutes,
    ...MarkdownRoutes,
    ...CardRoutes
  ]
}]
