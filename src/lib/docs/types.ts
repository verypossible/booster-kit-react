// import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

/** Routes */
export interface DocsMatch {
  path?: string,
  isExact?: boolean,
  url?: string,
  params: {
    collection: string
  }
}

/** Data Handling */
export interface DataJSON {
  changed?: boolean,
  module?: {
    children: object[],
    flags: object,
    groups: object[],
    id: number,
    kind: number,
    name: string
  }
  name?: string
}

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
export interface DocsActionHandlers {
  payload: DocsCollections,
  type: 'types/LOAD_COLLECTIONS'
}

export interface DocsActions {
  loadData: (payload: DataJSON) => ThunkAction<Promise<DocsCollections>, {}, {}>
}

export type Data = () => DataJSON

export interface DocsState {
  types: DataJSON,
  collections?: DocsCollections
}

export interface ConnectProps extends DocsActions {
  docs: DocsState
}
