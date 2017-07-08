import * as React from 'react'

import Header from 'components/Header'
import { renderGlobalStyles, theme, ThemeProvider } from 'ui'

interface LayoutCoreProps {
  children: any
}

const LayoutCore: React.SFC<LayoutCoreProps> = ({ children }) => {
  renderGlobalStyles()
  return (
    <ThemeProvider theme={theme.light}>
      <section>
          <Header />
          <div>
            {children}
          </div>
      </section>
    </ThemeProvider>
  )
}

export default LayoutCore
