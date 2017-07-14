/* Globals */
declare var __DEBUG__: boolean
declare var __PROD__: boolean
declare var __ROLLBAR_ENABLED__: boolean
declare var __ROLLBAR_TOKEN__: string
declare var __COMMIT_HASH__: string
declare var __TEST__: boolean
declare var __DEV__: boolean
declare var __GRAPHQL_API__: string

/* Window Variables */
declare interface Window {
  devToolsExtension?: any
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <F extends () => void>(f: F) => F
  __INITIAL_STATE__?: any
}

/* ES6 Object Methods */
declare interface ObjectConstructor {
  assign (target: any, ...sources: any[]): any,
  entries (target: any): any
}

/* Non-JS File Imports */
declare module '*.png' {
    const value: string
    export = value
}

declare module '*.md' {
    const value: any
    export = value
}

declare module '*.svg' {
    const value: any
    export = value
}

declare module '*.json' {
    const value: any
    export = value
}
