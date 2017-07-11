import * as React from 'react'

import {
  Anchor,
  Box
} from 'atoms'

const NavBar: React.SFC<NavBar> = ({ navItems }) => (
  <Box>
    {navItems.map((item) => (
      <Anchor key={item.id} id={item.id} to={item.to}>{item.text}</Anchor>
    ))}
  </Box>
)

export default NavBar
