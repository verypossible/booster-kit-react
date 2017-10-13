import * as React from 'react'

import { Box } from 'atoms'

import NavBar from 'components/NavBar'

import TwoColumn from './TwoColumn'

interface NavItem {
  id: string,
  text: any,
  to: string
}

interface LayoutSidebarProps {
  children?: any
  navItems?: NavItem[]
}

const defaultNavItems = [{
  id: 'counterLink',
  text: 'Counter',
  to: '/docs/examples/counter'
}, {
  id: 'graphqlLink',
  text: 'Graphql',
  to: '/docs/examples/graphql'
}]

const Layout: React.SFC<LayoutSidebarProps> = ({
  children,
  navItems = defaultNavItems
}) => (
  <TwoColumn split='1/4' height='fullvh'>
    <Box area={{ col: 'left' }} inverse>
      <NavBar navItems={navItems} />
    </Box>
    <Box area={{ col: 'right' }}>
      {children}
    </Box>
  </TwoColumn>

)

export default Layout
