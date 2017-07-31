import * as React from 'react'

import { Anchor, Box } from 'atoms'

interface DocsLayoutProps {
  children: React.SFC<any>
}

const DocsLayout: React.SFC<DocsLayoutProps> = ({
  children
}) => (
  <Box tag='section'>
    <Anchor to='/docs/examples' />
    {children}
  </Box>
)

export default DocsLayout
