import * as React from 'react'

import { Box } from 'atoms'

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
    <Box
      display='grid'
      columns={columns}
      height='100vh'
      rows='auto auto'
      {...gutters}
    >
      {children}
    </Box>
  )
}

export default TwoColumn
