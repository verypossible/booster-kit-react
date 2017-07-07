import { StoreWithState } from '../types'

export interface Match {
  path?: string,
  isExact?: boolean,
  url?: string,
  params?: object
}

export interface RouteConfig {
  exact?: true,
  id?: string,
  path?: string,
  routeComponent?: any
}

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
  location?: object
}
