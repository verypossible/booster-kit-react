import * as React from 'react'

import styled, { css } from 'ui'

/* CSS Grid Docs:
   - https://css-tricks.com/snippets/css/complete-guide-grid/
   - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
*/

export type ItemsOptions = 'start' | 'end' | 'center' | 'stretch'
type ContentOptions = 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'

interface GridContainer {
  children?: any,
  className?: string,
  inline?: boolean,
  subgrid?: boolean,
  columns?: string,
  rows?: string,
  gutters?: string,
  justifyItems?: ItemsOptions,
  alignItems?: ItemsOptions,
  justifyContent?: ContentOptions,
  alignContent?: ContentOptions,
  autoRows?: string,
  autoColumns?: string,
  autoFlow?: 'row' | 'column' | 'row dense' | 'column dense',
  theme?: ThemeInterface,
  background?: string
}

const gridTemplate = ({ rows, columns }: GridContainer) => css`
  ${rows && `grid-template-rows: ${rows};`}
  ${columns && `grid-template-columns: ${columns};`}
`

const gridSettings = (props: GridContainer) => css`
  ${
    (props.gutters && `grid-gap: ${props.gutters};`)
    || `grid-gap: ${props.theme.gutterRow} ${props.theme.gutterColumn};`
  }
  ${props.justifyItems && `justify-items: ${props.justifyItems};`}
  ${props.alignItems && `justify-items: ${props.alignItems};`}
  ${props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${props.alignContent && `justify-content: ${props.alignContent};`}
  ${props.autoRows && `grid-auto-rows: ${props.autoRows};`}
  ${props.autoColumns && `grid-auto-columns: ${props.autoColumns};`}
  ${props.autoFlow && `grid-auto-flow: ${props.autoFlow};`}
`

const styles = (props: GridContainer) => css`
  ${props.background && `background: ${props.background};`}
  display: ${(props.inline && 'inline') || (props.subgrid && 'subgrid') || 'grid'};
`

const GridContainer: React.SFC<GridContainer> = ({ children, className }) => (
  <section className={className}>
    {children}
  </section>
)

export default styled(GridContainer)`
  ${gridTemplate};
  ${gridSettings}
  ${styles}
  height: 100%;
  min-height: 100vh;
`
