import { css } from '../index'

import { buildTrackItem } from './gridTrackHelpers'

export interface GridItem {
  area?: string,
  column?: any[],
  row?: any[],
}

const gridItem = ({
  area,
  column,
  row
}: BoxProps) => css`
  ${column && `grid-column: ${buildTrackItem(column)};`}
  ${row && `grid-row: ${buildTrackItem(row)};`}
  ${area && `grid-area: ${area};`}
`

export default gridItem
