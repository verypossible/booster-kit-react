export type Route = {
  component?: mixed,
  pattern?: string,
  exactly?: boolean,
  routes?: Array<mixed>,
  location?: string | Object,
  store?: Object
}

export type RouteProps = {
  pattern: string,
  pathname: string,
  isExact: boolean,
  location: string,
  params: Object
}
