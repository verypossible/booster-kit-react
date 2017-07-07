import withSubRoutes from 'hoc/withSubRoutes'
import LayoutSidebar from 'layouts/LayoutSidebar'

import CounterRoutes from './counter'
import MarkdownRoutes from './markdown'
import ReactHome from './root'

const ReactRouteWithLayout = withSubRoutes(LayoutSidebar)

export default [{
  id: 'root-react',
  path: '/react',
  routeComponent: ReactRouteWithLayout,
  routes: [{
    exact: true,
    id: 'react-home',
    path: '/',
    routeComponent: ReactHome
  },
    ...CounterRoutes,
    ...MarkdownRoutes
  ]
}]
