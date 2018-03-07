import { Store } from '../types'

export interface RouteConfig {
  path?: string
  id?: string
  exact?: boolean
  strict?: boolean
  routeComponent?: any
}

export interface MakeRoute extends RouteConfig {
  routes?: RouteConfig[]
  store?: Store<{}>
}
