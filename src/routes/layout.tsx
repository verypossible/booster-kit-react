import * as React from 'react'

import { Box } from 'atoms'
import { renderGlobalStyles, ThemeProvider, themes } from 'ui'

interface Props {
  children: React.ReactNode
}

/**
 *  Render the static layout
 */
renderGlobalStyles()
const LayoutCore: React.SFC<Props> = ({ children }) => {
  const theme = themes.light
  return (
    <ThemeProvider theme={theme}>
      <Box tag='section'>
        {children}
      </Box>
    </ThemeProvider>
  )
}

export default LayoutCore
