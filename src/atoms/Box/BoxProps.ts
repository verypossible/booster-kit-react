type AlignItems = 'start' | 'end' | 'center' | 'stretch'

type AlignContent = 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'

type AutoFlow = 'row' | 'column' | 'row dense' | 'column dense'

type Display = 'none' | 'inline' | 'inline-block' | 'block' | 'grid' | 'subGrid' | 'flex'

type Justify = 'start' | 'center' | 'between' | 'end'

type TextAlign = 'left' | 'center' | 'right'

type BoxTags = 'div' | 'span' | 'section'

export interface BoxProps extends Theme {
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
