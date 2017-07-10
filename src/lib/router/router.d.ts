declare interface ComposedRoute {
  route: RouteConfig
}

declare interface Location {
  key?: string,
  pathname: string,
  search: string,
  hash: string,
  state: object
}

declare interface Match {
  path?: string,
  isExact?: boolean,
  url?: string,
  params?: object
}

declare interface RouteConfig {
  exact?: true,
  id?: string,
  path?: string,
  routeComponent?: any
}
