import BoxRoutes from './box'
import CounterRoutes from './counter'

export default [...BoxRoutes, ...CounterRoutes] as RouteConfig[]
