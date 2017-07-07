declare var __DEBUG__: boolean

declare interface Window {
  // A hack for the Redux DevTools Chrome extension.
  devToolsExtension?: any
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <F extends () => void>(f: F) => F
  __INITIAL_STATE__?: any
}

declare interface ObjectConstructor {
  assign (target: any, ...sources: any[]): any,
  entries (target: any): any
}

declare module '*.png' {
    const value: string
    export = value
}

declare module '*.md' {
    const value: any
    export = value
}
