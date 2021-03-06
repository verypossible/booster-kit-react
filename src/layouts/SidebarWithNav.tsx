import * as React from 'react'

import { Box } from 'atoms'

import NavBar from 'components/NavBar'

import TwoColumn from './TwoColumn'

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
  <TwoColumn leftWidth={25}>
    <Box column={[1, 1]} inverse>
      <NavBar navItems={navItems} />
    </Box>
    <Box column={[2, 2]}>
      {children}
    </Box>
  </TwoColumn>

)

export default Layout
