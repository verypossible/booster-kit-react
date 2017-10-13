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
      part?: string,
      item?: string,
      subItem?: string
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
export interface DocsModules {
  children: DocsModules[],
  id?: string,
  name: string,
  path?: string,
  title?: string
}

export interface Markdown {
  id: string,
  path: string,
  children?: Markdown[],
  title: string,
  content: string
}

type Action<P, T> = {
  payload: P,
  type: T
}

type LoadModules = Action<DocsModules, 'docs/LOAD_MODULES'>
type LoadMarkdown = Action<Markdown[], 'docs/LOAD_MARKDOWN'>
type UpdateMarkdown = Action<Markdown, 'docs/UPDATE_MARKDOWN'>

export type DocsActionHandlers = LoadModules & LoadMarkdown & UpdateMarkdown

export interface DocsActions {
  loadModules?: (payload: DataJSON) => ThunkAction<Promise<DocsModules>, {}, {}>,
  loadMarkdown?: () => ThunkAction<Promise<Markdown[]>, {}, {}>
}

export type Data = () => DataJSON

export interface DocsState {
  modules: DocsModules | boolean,
  markdown?: Markdown[]
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

export type SelectorData = DocsModules & Markdown

export interface Selectors {
  activeCollection?: SelectorData,
  activePart?: SelectorData,
  activeSubItem?: SelectorData,
  docsNav?: NavItem[],
  docs?: DocsState,
  activeItem?: SelectorData,
  privateSubItems?: ParsedTypes,
  publicSubItems?: ParsedTypes,
  content?: string
}

export type ConnectProps = Selectors & DocsActions & DocsMatch & DocsHistory
