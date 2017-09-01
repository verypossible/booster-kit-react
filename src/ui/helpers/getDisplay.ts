export interface SetDisplay {
  block?: boolean,
  columns?: string,
  grid?: boolean,
  inline?: boolean,
  inlineBlock?: boolean,
  noFlex?: boolean,
  rows?: string
}

const getDisplay = ({
  block,
  columns,
  grid,
  inline,
  inlineBlock,
  noFlex,
  rows
}: SetDisplay) => {
  const isGrid = rows || columns || grid
  const isFlex = !(rows || columns || grid || inline || inlineBlock || block) && !noFlex
  return (
    (isGrid && 'grid') ||
    (inline && 'inline') ||
    (inlineBlock && 'inline-block') ||
    (block && 'block') ||
    (isFlex && 'flex')
  )
}

export default getDisplay
