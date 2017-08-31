const setDisplay = ({
  columns,
  grid,
  rows,
  inline,
  inlineBlock,
  noFlex
}) => {
  switch (true) {
    case columns || rows || grid:
      return 'grid'
    case inline:
      return 'inline'
    case noFlex:
      return 'block'
    case inlineBlock:
      return 'inline-block'
    default:
      return 'flex'
  }
}

export default setDisplay
