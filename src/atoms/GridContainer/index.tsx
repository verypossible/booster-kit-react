import * as React from 'react'

import atom, { css } from 'ui'

/* CSS Grid Docs:
   - https://css-tricks.com/snippets/css/complete-guide-grid/
   - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
*/

const gridTemplate = ({ rows, columns }: GridContainer) => css`
  ${rows && `grid-template-rows: ${rows};`}
  ${columns && `grid-template-columns: ${columns};`}
`

const gridSettings = ({
  rowGutter,
  columnGutter,
  theme,
  justifyItems,
  justifyContent,
  alignItems,
  alignContent,
  autoRows,
  autoColumns,
  autoFlow
}: GridContainer) => css`
  ${
    ((rowGutter || columnGutter) &&
    `grid-gap: ${theme.grid.rowGutter[rowGutter]} ${theme.grid.columnGutter[columnGutter]};`)
    || `grid-gap: ${theme.grid.rowGutter.medium} ${theme.grid.columnGutter.medium};`
  }
  ${justifyItems && `justify-items: ${justifyItems};`}
  ${alignItems && `justify-items: ${alignItems};`}
  ${justifyContent && `justify-content: ${justifyContent};`}
  ${alignContent && `justify-content: ${alignContent};`}
  ${autoRows && `grid-auto-rows: ${autoRows};`}
  ${autoColumns && `grid-auto-columns: ${autoColumns};`}
  ${autoFlow && `grid-auto-flow: ${autoFlow};`}
`

const styles = (props: GridContainer) => css`
  ${props.background && `background: ${props.background};`}
  display: ${(props.inline && 'inline') || (props.subgrid && 'subgrid') || 'grid'};
`

const GridComponent: React.SFC<GridContainer> = ({ children, className }) => (
  <section className={className}>
    {children}
  </section>
)

export default atom(GridComponent)`
  ${gridTemplate};
  ${gridSettings}
  ${styles}
  height: 100%;
  min-height: 100vh;
`
