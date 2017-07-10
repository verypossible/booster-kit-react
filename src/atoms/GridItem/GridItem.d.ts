declare interface GridItem extends Theme {
  column?: [string, string] | [number, number],
  spanColumn?: boolean,
  row?: [string, string] | [number, number],
  area?: string,
  justifySelf?: ItemsOptions,
  alignSelf?: ItemsOptions,
  inverse?: boolean,
  theme?: ThemeInterface,
  background?: string,
  padding?: string
}
