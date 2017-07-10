import { StoreWithState } from '../types'

export interface RouteProps {
  path?: string,
  id?: string,
  exact?: boolean,
  strict?: boolean,
  store?: StoreWithState,
  routeComponent?: any,
  matchPath?: string
}

export interface MakeRoute extends RouteProps {
  routes?: RouteProps[],
  match?: Match,
  location?: any
}
