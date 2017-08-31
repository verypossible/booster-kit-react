import { css } from '../index'

import { buildGap, buildTrack, buildTrackItem } from '../helpers/gridHelpers'

interface Area {
  [key: string]: string
}

export type AutoFlow = 'row' | 'column' | 'dense' | 'row dense' | 'column dense'

export interface Grid extends Theme {
  area: Area | string,
  autoColumns?: string,
  autoFlow?: AutoFlow,
  autoRows?: string,
  columns?: string,
  gap?: ThemeSizeSelector | string,
  rows?: string
}

const grid = ({
  area,
  autoColumns,
  autoFlow,
  autoRows,
  columns,
  gap,
  rows,
  theme
}: Grid) => css`
  ${(rows || columns) && `grid-gap: ${buildGap(gap, theme)};`}
  ${rows && `grid-template-rows: ${buildTrack(rows)};`}
  ${rows && !columns && `grid-template-rows: auto;`}
  ${columns && `grid-template-columns: ${buildTrack(columns)};`}
  ${columns && !rows && `grid-template-columns: auto;`}
  ${autoRows && `grid-auto-rows: ${autoRows};`}
  ${autoColumns && `grid-auto-columns: ${autoColumns};`}
  ${autoFlow && `grid-auto-flow: ${autoFlow};`}
  ${area && typeof area === 'object' && `grid-area: ${buildTrackItem(area.row || area.col)};`}
  ${area && typeof area === 'string' && `grid-area: ${buildTrackItem(area)};`}
`

export default grid
