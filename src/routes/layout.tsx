import * as React from 'react'

import { Box } from 'atoms'
import { renderGlobalStyles, theme, ThemeProvider } from 'ui'

interface Props {
  children: React.ReactNode
}

/**
 *  Render the static layout
 */
const LayoutCore: React.SFC<Props> = ({ children }) => {
  renderGlobalStyles()
  return (
    <ThemeProvider theme={theme.light}>
      <Box tag='section'>
        {children}
      </Box>
    </ThemeProvider>
  )
}

export default LayoutCore
