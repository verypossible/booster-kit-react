import * as React from 'react'

import { Box } from 'atoms'

interface MarkdownLayoutProps {
  children: React.SFC<any>
}

const MarkdownLayout: React.SFC<MarkdownLayoutProps> = ({
  children
}) => (
  <Box tag='section'>
    {children}
  </Box>
)

export default MarkdownLayout
