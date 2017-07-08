import styled, { css } from 'ui'
import { ItemsOptions } from './GridContainer'

/* CSS Grid Docs:
   - https://css-tricks.com/snippets/css/complete-guide-grid/
   - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
*/

interface GridItemProps {
  column?: [string, string] | [number, number],
  spanColumn?: boolean,
  row?: string,
  area?: string,
  justifySelf?: ItemsOptions,
  alignSelf?: ItemsOptions,
  inverse?: boolean,
  theme?: ThemeInterface,
  background?: string,
  padding?: string
}

const gridItemSettings = ({
  area, column, row, justifySelf, theme, inverse, padding
}: GridItemProps) => css`
  ${column && `grid-column: ${column[0]} / ${column[1]};`}
  ${row && `grid-row: ${row[0]} / ${row[1]};`}
  ${area && `grid-area: ${area};`}
  ${justifySelf && `justify-self: ${justifySelf};`}
  ${`background: ${inverse ? theme.primaryBackgroundInverted : theme.primaryBackground};`}
   padding: ${padding ? theme.pad[padding] : theme.pad.medium}
`

const GridItem = styled.div`
  ${gridItemSettings}
  height: 100%;
`

export default GridItem
