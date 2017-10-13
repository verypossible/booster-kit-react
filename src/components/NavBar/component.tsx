import * as React from 'react'

import {
  Anchor,
  Box
} from 'atoms'
import { BoxProps } from 'atoms/Box'

export interface NavItem {
  id: string,
  to: string,
  text: string
}

export interface NavBar {
  navItems: NavItem[],
  box?: BoxProps
}

const NavBar: React.SFC<NavBar> = ({ navItems, box }) => (
  <Box {...box}>
    {navItems.map(item => (
      <Anchor key={item.id} {...item}>{item.text}</Anchor>
    ))}
  </Box>
)

export default NavBar
