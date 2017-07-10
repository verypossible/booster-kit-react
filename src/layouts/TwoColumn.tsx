import * as React from 'react'

import GridContainer from 'atoms/GridContainer'

interface TwoColumnProps {
  children?: any,
  rowGutter?: ThemeSizeSelector,
  columnGutter?: ThemeSizeSelector,
  leftWidth?: number
}

const TwoColumn: React.StatelessComponent<TwoColumnProps> = ({
  children,
  columnGutter,
  leftWidth = 50,
  rowGutter
}) => {
  const rightWidth = 100 - leftWidth
  const columns = `${leftWidth}% ${rightWidth}%`
  const gutters = {
    columnGutter,
    rowGutter
  }
  return (
    <GridContainer
      columns={columns}
      rows='auto auto'
      {...gutters}
    >
      {children}
    </GridContainer>
  )
}

export default TwoColumn
