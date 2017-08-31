import * as React from 'react'

import { Box } from 'atoms'
import { BoxProps } from 'atoms/Box'

interface AutoGridProps {
  direction?: 'row' | 'column',
  minBoxSize?: string
}

const AutoColumnGrid: React.SFC<BoxProps> = ({
  children,
  direction = 'row',
  minBoxSize = '6'
  ...props
}) => (
  <Box
    autoFlow={direction}
    columns={`repeat(auto-fill, minmax(${minBoxSize}em, 1fr))`}
    {...props}
  >
    {children}
  </Box>
)

export default AutoColumnGrid
