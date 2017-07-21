declare interface ComposedRoute {
  route: RouteConfig
}

declare interface RouterLocation {
  key?: string,
  pathname: string,
  search: string,
  hash: string,
  state: {
    error?: string,
    user?: object
  }
  host: string
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

declare type ReplaceHistory = (pathname: string, state: object) => void

declare type RouterMatch = Match

declare interface RouterHistory {
  location: RouterLocation,
  replace: ReplaceHistory
}
