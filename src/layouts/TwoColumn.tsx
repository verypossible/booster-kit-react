import * as React from 'react'

import { Box } from 'atoms'

interface TwoColumnProps {
  children?: any,
  gap: string,
  leftWidth?: number
}

const TwoColumn: React.StatelessComponent<TwoColumnProps> = ({
  children,
  gap,
  leftWidth = 50
}) => {
  const rightWidth = 100 - leftWidth
  const columns = `${leftWidth}% ${rightWidth}%`
  return (
    <Box
      columns={columns}
      height='100vh'
      rows='auto auto'
      gap={gap}
    >
      {children}
    </Box>
  )
}

export default TwoColumn
