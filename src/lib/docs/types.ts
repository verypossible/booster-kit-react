export interface DocsModule {
  name: string,
  parts: object
}

export interface DocsCollection {
  collection: string,
  modules: DocsModule[]
}

export type DocsCollections = DocsCollection[]

/** Actions */
export type DocsActionHandlers = {
  payload: DocsCollections,
  type: 'types/LOAD_COLLECTIONS'
}

export interface DocsActions {
  loadTypes: (payload: DocsCollections) => DocsActionHandlers
}

export type DocsState = DocsCollection[] | boolean
