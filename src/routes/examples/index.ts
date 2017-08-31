import withSubRoutes from 'hoc/withSubRoutes'
import SidebarWithNav from 'layouts/SidebarWithNav'

import BoxRoutes from './box'
import CounterRoutes from './counter'
import ExampleHome from './root'

const ExampleRoutesWithLayout = withSubRoutes(SidebarWithNav)

export default [...BoxRoutes] as RouteConfig[]
