import * as React from 'react'

import { Box } from 'atoms'
import Header from 'components/Header'
import { renderGlobalStyles, theme, ThemeProvider } from 'ui'

interface LayoutCoreProps {
  children: any
}

const LayoutCore: React.SFC<LayoutCoreProps> = ({ children }) => {
  renderGlobalStyles()
  return (
    <ThemeProvider theme={theme.light}>
      <Box tag='section'>
          <Header />
          <Box>
            {children}
          </Box>
      </Box>
    </ThemeProvider>
  )
}

export default LayoutCore
