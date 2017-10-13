import * as React from 'react'

import { Box } from 'atoms'
import { BoxProps } from 'atoms/Box'

interface AutoGridProps extends BoxProps {
  minBoxSize?: string
}

const AutoColumnGrid: React.SFC<AutoGridProps> = ({
  children,
  autoFlow = 'row',
  minBoxSize = '6',
  ...props
}) => (
  <Box
    autoFlow={autoFlow}
    columns={`repeat(auto-fill, minmax(${minBoxSize}em, 1fr))`}
    {...props}
  >
    {children}
  </Box>
)

export default AutoColumnGrid
