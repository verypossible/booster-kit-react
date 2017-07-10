import withSubRoutes from 'hoc/withSubRoutes'

import MarkdownLayout from './layout'
import MarkdownHome from './root'

const MarkdownRoutes = withSubRoutes(MarkdownLayout)

export default [{
  id: 'route-markdown',
  path: '/markdown',
  routeComponent: MarkdownRoutes,
  routes: [{
    exact: true,
    id: 'markdown-home',
    routeComponent: MarkdownHome
  }]
}]
