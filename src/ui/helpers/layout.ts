import { css } from '../index'

import { AlignContent, AlignItems, Justify } from './cssTypes'

interface SizeObject {
  top?: string,
  right?: string,
  bottom?: string,
  left?: string
}

export interface Layout extends Theme {
  alignContent?: AlignContent,
  align?: AlignItems,
  alignSelf?: AlignItems,
  columns?: string,
  grid?: boolean,
  icon?: string,
  justifyContent?: AlignContent,
  justify?: Justify,
  justifySelf?: Justify,
  height?: ThemeLayoutSizeSelector | string,
  margin?: ThemeSizeSelector | SizeObject,
  pad?: ThemeSizeSelector | SizeObject,
  rows?: string,
  width?: ThemeSizeSelector | string
}

const buildSizeValues = (value, theme) => {
  if (typeof value === 'object') {
    const set = v => v && theme[v] || v && `${v}em` || '0'
    return (
      `${set(value.top)} ${set(value.right)} ${set(value.bottom)} ${set(value.left)}`
    ))
  }

  return theme[value] || `${value}em`
}

const hasUnit = unit => /^px|em|rem|%|vh|vmin/.test(unit)

const layout = ({
  alignContent,
  alignSelf,
  align,
  columns,
  display,
  grid,
  height,
  icon,
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
  ${justifySelf && `justify-self: ${justifySelf};`}
  ${align && `align-items: ${align};`}
  ${alignContent && `align-content: ${alignContent};`}
  ${alignSelf && `align-self: ${alignSelf};`}
  ${pad && `padding: ${buildSizeValues(pad, theme.layout.pad)};`}
  ${margin && `margin: ${buildSizeValues(margin, theme.layout.margin)};`}
  ${height && `height: ${theme.layout.height[height] || `${height}em`};`}
  ${width && `width: ${
    (
      !icon && (theme.layout.width[width] || `${width}em`)
    ) || (
      icon && (theme.icons.size[width] || (hasUnit(width) ? width : `${width}em`))
    )
  };`}
`

export default layout
