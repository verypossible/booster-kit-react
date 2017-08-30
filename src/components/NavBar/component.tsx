import * as React from 'react'

import {
  Anchor,
  Box
} from 'atoms'

interface NavItem {
  id?: string,
  to?: string,
  className?: string,
  text?: string
}

interface NavBar {
  navItems: NavItem[],
  layout: any
}

const NavBar: React.SFC<NavBar> = ({ navItems, layout }) => (
  <Box {...layout}>
    {navItems.map(item => (
      <Anchor key={item.id} id={item.id} {...item}>{item.text}</Anchor>
    ))}
  </Box>
)

export default NavBar
