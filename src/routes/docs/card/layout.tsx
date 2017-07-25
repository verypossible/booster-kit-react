import * as React from 'react'

import { Box } from 'atoms'

interface CardLayoutProps {
  children: React.SFC<any>
}

const CardLayout: React.SFC<CardLayoutProps> = ({
  children
}) => (
  <Box tag='section'>
    {children}
  </Box>
)

export default CardLayout
