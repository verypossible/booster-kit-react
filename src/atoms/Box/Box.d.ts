declare type AlignItems = 'start' | 'end' | 'center' | 'stretch'

declare type AlignContent = 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'

declare type AutoFlow = 'row' | 'column' | 'row dense' | 'column dense'

declare type Display = 'none' | 'inline' | 'inline-block' | 'block' | 'grid' | 'subGrid' | 'flex'

declare type Justify = 'start' | 'center' | 'between' | 'end'

declare type TextAlign = 'left' | 'center' | 'right'

declare type BoxTags = 'div' | 'span' | 'section'

interface Box extends Theme {
  alignContent?: AlignContent,
  alignItems?: AlignItems,
  alignSelf?: AlignItems,
  area?: string,
  autoColumns?: string,
  autoFlow?: AutoFlow,
  autoRows?: string,
  background?: string,
  children?: any,
  className?: string,
  column?: any[],
  columnGutter?: ThemeSizeSelector,
  columns?: string,
  display?: Display,
  height?: ThemeLayoutSizeSelector | string,
  id?: string,
  inverse?: boolean
  justifyContent?: AlignContent,
  justifyItems?: Justify,
  justifySelf?: Justify,
  margin?: ThemeSizeSelector,
  pad?: ThemeSizeSelector,
  role?: string,
  row?: any[],
  rowGutter?: ThemeSizeSelector,
  rows?: any,
  spanColumn?: boolean,
  tag?: BoxTags,
  textAlign?: TextAlign,
  width?: ThemeSizeSelector | string
}
