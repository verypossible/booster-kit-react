import * as React from 'react'

import { Box } from 'atoms'

interface CounterLayoutProps {
  children: React.SFC<any>
}

const CounterLayout: React.SFC<CounterLayoutProps> = ({
  children
}) => (
  <Box tag='section'>
    {children}
  </Box>
)

export default CounterLayout
