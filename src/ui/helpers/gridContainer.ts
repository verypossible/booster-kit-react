import { css } from '../index'

import { Display } from './cssTypes'
import { buildGap, buildTrack } from './gridTrackHelpers'

export interface GridContainer extends Theme {
  autoColumns?: string,
  autoFlow?: AutoFlow,
  autoRows?: string,
  columns?: string,
  display?: Display,
  gap?: ThemeSizeSelector | string,
  rows?: string
}

const gridContainer = ({
  autoColumns,
  autoFlow,
  autoRows,
  columns,
  display,
  gap,
  rows,
  theme
}: GridContainer) => css`
  ${(rows || columns) && `grid-gap: ${buildGap(gap, theme)};`}
  ${rows && `grid-template-rows: ${buildTrack(rows)};`}
  ${columns && `grid-template-columns: ${buildTrack(columns)};`}
  ${autoRows && `grid-auto-rows: ${autoRows};`}
  ${autoColumns && `grid-auto-columns: ${autoColumns};`}
  ${autoFlow && `grid-auto-flow: ${autoFlow};`}
`

export default gridContainer
