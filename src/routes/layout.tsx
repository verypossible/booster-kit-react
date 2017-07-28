import * as React from 'react'

import { Box } from 'atoms'
import Header from 'components/Header'
import { renderGlobalStyles, theme, ThemeProvider } from 'ui'

import { InitializeProps } from './initialize'

interface Props extends InitializeProps {
  children: React.ReactNode
}

/**
 *  Render the static layout, then once initialized, render the routes.
 */
const LayoutCore: React.SFC<Props> = ({ children, initialized }) => {
  renderGlobalStyles()
  return (
    <ThemeProvider theme={theme.light}>
      <Box tag='section'>
          <Header />
          {initialized && (
            <Box>
              {children}
            </Box>
          )}
      </Box>
    </ThemeProvider>
  )
}

export default LayoutCore
