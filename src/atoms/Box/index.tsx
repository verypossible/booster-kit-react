import * as React from 'react'

import atom, { css } from 'ui'

const grid = ({
  rows,
  columns,
  rowGutter,
  columnGutter,
  theme,
  autoRows,
  autoColumns,
  autoFlow
}: Box) => css`
  ${
    ((rowGutter || columnGutter) &&
    `grid-gap: ${theme.grid.rowGutter[rowGutter]} ${theme.grid.columnGutter[columnGutter]};`)
    || `grid-gap: ${theme.grid.rowGutter.medium} ${theme.grid.columnGutter.medium};`
  }
  ${rows && `grid-template-rows: ${rows};`}
  ${columns && `grid-template-columns: ${columns};`}
  ${autoRows && `grid-auto-rows: ${autoRows};`}
  ${autoColumns && `grid-auto-columns: ${autoColumns};`}
  ${autoFlow && `grid-auto-flow: ${autoFlow};`}
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
  inverse,
  textAlign,
  theme
}: Box) => `
  ${(background || inverse) && `background-color: ${setBackground(background, inverse, theme.colors)};`},
  ${textAlign && `textAlign: ${textAlign};`}
`

const Box = ({
  children,
  tag = 'div',
  ...props
}) => React.createElement(tag, { ...props }, children)

export default atom(Box)`
  ${grid}
  ${layout}
  ${styles}
  `
