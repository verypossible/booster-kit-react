declare type ItemsOptions = 'start' | 'end' | 'center' | 'stretch'

declare type ContentOptions = 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'

interface GridContainer extends Theme {
  children?: any,
  className?: string,
  inline?: boolean,
  subgrid?: boolean,
  columns?: string,
  rows?: string,
  rowGutter?: ThemeSizeSelector,
  columnGutter?: ThemeSizeSelector,
  justifyItems?: ItemsOptions,
  alignItems?: ItemsOptions,
  justifyContent?: ContentOptions,
  alignContent?: ContentOptions,
  autoRows?: string,
  autoColumns?: string,
  autoFlow?: 'row' | 'column' | 'row dense' | 'column dense',
  background?: string
}
