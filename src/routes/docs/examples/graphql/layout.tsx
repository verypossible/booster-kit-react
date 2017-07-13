import * as React from 'react'

import { Box } from 'atoms'

interface GraphqlLayoutProps {
  children: React.SFC<any>
}

const GraphqlLayout: React.SFC<GraphqlLayoutProps> = ({
  children
}) => (
  <Box tag='section'>
    {children}
  </Box>
)

export default GraphqlLayout
