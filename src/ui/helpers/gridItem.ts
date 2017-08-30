import { css } from '../index'

import { buildTrackItem } from './gridTrackHelpers'

export interface GridItem {
  area?: string
}

interface Item {
  column?: string,
  row?: string
}

const gridItem = ({
  area
}: GridItem) => {
  const items = area && buildTrackItem(area) as Item
  return css`
    ${items && items.column && `grid-column: ${buildTrackItem(items.column)};`}
    ${items && items.row && `grid-row: ${buildTrackItem(items.row)};`}
  `
}

export default gridItem
