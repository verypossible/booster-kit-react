import withSubRoutes from 'hoc/withSubRoutes'
import { DocsEntry } from 'lib/docs'

// import ExamplesRoutes from './examples'
// import DocsLayout from './layout'

export default [{
  id: 'root-docs',
  path: '/docs',
  routeComponent: DocsEntry
}] as RouteConfig[]
