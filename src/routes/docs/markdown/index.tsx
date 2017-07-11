import { withSubRoutes } from 'lib/router'

import MarkdownLayout from './layout'
import MarkdownHome from './root'

const MarkdownRoutes = withSubRoutes(MarkdownLayout)

export default [{
  id: 'route-markdown',
  path: '/docs/markdown',
  routeComponent: MarkdownRoutes,
  routes: [{
    exact: true,
    id: 'markdown-home',
    path: '/docs/markdown',
    routeComponent: MarkdownHome
  }]
}]
