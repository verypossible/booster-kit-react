export interface DocsModule {
  name: string,
  parts: object
}

export interface DocsCollection {
  collection: string,
  modules: DocsModule[]
}

export type DocsCollections = DocsCollection[]
