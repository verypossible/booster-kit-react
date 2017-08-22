// import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

/** Routes */
export interface DocsMatch {
  match?: {
    path?: string,
    isExact?: boolean,
    url?: string,
    params?: {
      collection?: string,
      module?: string,
      static?: string,
      staticCollection?: string,
      staticItem?: string
    }
  }
}

export interface DocsHistory {
  history?: {
    goBack?: () => void,
    goForward?: () => void
  }
}

/** Actions */
export interface Markdown {
  path: string,
  param: string,
  files?: Markdown[],
  title: string,
  content: string
}

type Action<P, T> = {
  payload: P,
  type: T
}

type LoadCollections = Action<DocsCollections, 'docs/LOAD_COLLECTIONS'>
type LoadMarkdown = Action<Markdown[], 'docs/LOAD_MARKDOWN'>
type UpdateMarkdown = Action<Markdown, 'docs/UPDATE_MARKDOWN'>

export type DocsActionHandlers = LoadCollections & LoadMarkdown & UpdateMarkdown

export interface DocsActions {
  loadData?: (payload: DataJSON) => ThunkAction<Promise<DocsCollections>, {}, {}>,
  loadMarkdown?: () => ThunkAction<Promise<Markdown[]>, {}, {}>
}

export type Data = () => DataJSON

export interface DocsState {
  collections: DocsCollections | boolean
  markdown?: Markdown[],
  types: DataJSON,
}

/** Selectors */
export interface NavItem {
  id: string,
  to: string,
  text: string,
}

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

interface Source {
  fileName: string,
  line: number
}

export interface BaseType {
  name: string,
  defaultValue?: string,
  kindString?: string,
  comment?: {
    shortText?: string
  }
  flags?: {
    isExported?: boolean
  }
  signatures?: Array<{
    kindString?: string,
    name?: string,
    parameters?: Array<{
      id?: string,
      name: string,
      type: {
        declaration: {
          children: object[]
        }
      }
    }>
  }>,
  sources?: Source[],
  type?: string
}

export interface Param {
  inherited: string | boolean,
  kind: string,
  name: string,
  sources: string[],
  isExported?: boolean,
  isOptional?: boolean,
  type: string[]
}

export interface Meta {
  signature?: string,
  params?: Param[],
  sources?: string[]
}

export interface ParsedType extends BaseType {
  meta?: Meta
}

export type ParsedTypes = ParsedType[]

export interface Selectors {
  activeCollection?: DocsCollection,
  activeModule?: DocsModule,
  activeStaticCollection?: Markdown,
  collectionsNav?: NavItem[],
  collectionModulesNav?: NavItem[],
  docs?: DocsState,
  privateModuleParts?: ParsedTypes,
  publicModuleParts?: ParsedTypes,
  staticCollectionNav?: NavItem[],
  staticDocsNav?: NavItem[]
}

export type ConnectProps = Selectors & DocsActions & DocsMatch & DocsHistory
