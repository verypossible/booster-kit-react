import log from './log'

export const routeNotFound = (path: string) =>
  log.warning(`404: ${path} not found`, { route: path })

export const chunkError = (name: string, error: object) =>
  log.warning(`Chunk loading failed: ${name}`, { error })
