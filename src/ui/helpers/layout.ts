import { css } from '../index'

import { AlignContent, AlignItems, Justify } from './cssTypes'

export interface Layout extends Theme {
  alignContent?: AlignContent,
  align?: AlignItems,
  alignSelf?: AlignItems,
  columns?: string,
  grid?: boolean,
  justifyContent?: AlignContent,
  justify?: Justify,
  justifySelf?: Justify,
  height?: ThemeLayoutSizeSelector | string,
  margin?: ThemeSizeSelector,
  pad?: ThemeSizeSelector,
  rows?: string,
  width?: ThemeSizeSelector | string
}

const layout = ({
  alignContent,
  alignSelf,
  align,
  columns,
  display,
  grid,
  height,
  justifyContent,
  justifySelf,
  justify,
  margin,
  pad,
  rows,
  theme,
  width
}: Layout) => css`
  ${(rows || columns || grid) && `display: grid;`}
  ${(!rows || !columns || !grid) && display && `display: ${display};`}
  ${justify && `justify-items: ${justify};`}
  ${justifyContent && `justify-content: ${justifyContent};`}
  ${justifySelf && `justify-self: ${justifySelf}`}
  ${align && `align-items: ${align};`}
  ${alignContent && `align-content: ${alignContent};`}
  ${alignSelf && `align-self: ${alignSelf};`}
  ${pad && `padding: ${theme.layout.pad[pad] || pad};`}
  ${margin && `margin: ${theme.layout.margin[margin] || margin};`}
  ${height && `height: ${theme.layout.height[height] || height};`}
  ${width && `width: ${theme.layout.width[width] || width};`}
`

export default layout
