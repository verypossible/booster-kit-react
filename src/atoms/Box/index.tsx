import * as React from 'react'

import atom, { css } from 'ui'

const gridContainer = ({
  autoColumns,
  autoFlow,
  autoRows,
  columnGutter,
  columns,
  display,
  rowGutter,
  rows,
  theme
}: Box) => css`
  ${display === 'grid' &&
    ((rowGutter || columnGutter) &&
    `grid-gap: ${theme.grid.rowGutter[rowGutter]} ${theme.grid.columnGutter[columnGutter]};`)
    || (display === 'grid' && `grid-gap: ${theme.grid.rowGutter.medium} ${theme.grid.columnGutter.medium};`)
  }
  ${rows && `grid-template-rows: ${rows};`}
  ${columns && `grid-template-columns: ${columns};`}
  ${autoRows && `grid-auto-rows: ${autoRows};`}
  ${autoColumns && `grid-auto-columns: ${autoColumns};`}
  ${autoFlow && `grid-auto-flow: ${autoFlow};`}
`

const gridItem = ({
  area,
  column,
  row
}: Box) => css`
  ${column && `grid-column: ${column[0]} / ${column[1]};`}
  ${row && `grid-row: ${row[0]} / ${row[1]};`}
  ${area && `grid-area: ${area};`}
`

const setBackground = (background, inverse, colors) => `
  ${
    colors[background] ||
    (inverse && colors.primaryBackgroundInverted) ||
    colors.primaryBackground
  }
`

const layout = ({
  alignContent,
  alignItems,
  display,
  height,
  justifyContent,
  justifyItems,
  margin,
  pad,
  theme,
  width
}: Box) => css`
  ${justifyItems && `justify-items: ${justifyItems};`}
  ${alignItems && `justify-items: ${alignItems};`}
  ${justifyContent && `justify-content: ${justifyContent};`}
  ${alignContent && `justify-content: ${alignContent};`}
  ${display && `display: ${display};`}
  ${pad && `padding: ${theme.layout.pad[pad] || pad};`}
  ${margin && `margin: ${theme.layout.margin[margin] || margin};`}
  ${height && `height: ${theme.layout.height[height] || height};`}
  ${width && `width: ${theme.layout.width[width] || width};`}
`

const styles = ({
  background,
  border,
  color,
  inverse,
  textAlign,
  theme
}: Box) => `
  ${(background || inverse) && `background-color: ${setBackground(background, inverse, theme.colors)};`},
  ${textAlign && `textAlign: ${textAlign};`}
  ${border && `border: ${border};`}
  ${color && `color: ${theme.colors[color] || color};`}
`

const Box: React.SFC<Box> = ({
  children,
  tag,
  ...props
}) => {
  const BoxElement = atom.div`
    ${gridContainer}
    ${gridItem}
    ${layout}
    ${styles}
  `

  if (tag) {
    /** If a custom DOM tag is specified, this replaces the tag used with the value passed */
    const BoxWithTag = BoxElement.withComponent(tag)
    return <BoxWithTag {...props}>{children}</BoxWithTag>
  }

  return <BoxElement {...props}>{children}</BoxElement>
}

export default Box
