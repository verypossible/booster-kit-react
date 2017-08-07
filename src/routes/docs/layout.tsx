import * as React from 'react'

import { Anchor, Box } from 'atoms'
import SidebarWithNav from 'layouts/SidebarWithNav'
import { ModuleWrapper, typeCollections } from 'lib/docs'

interface Props {
  children: React.SFC<any>
}

interface State {
  api: object | boolean
}

const DocsLayout = ({ children, navItems }) => (
      <Box tag='section'>
        {console.log(children, 'IN DOC LAYOUT')}
        <SidebarWithNav navItems={navItems}>
          {children}
        </SidebarWithNav>
      </Box>
    )
  }
}

export default DocsLayout
