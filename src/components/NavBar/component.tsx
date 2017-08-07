import * as React from 'react'

import {
  Anchor,
  Box
} from 'atoms'

const NavBar: React.SFC<NavBar> = ({ color, navItems }) => (
  <Box>
    {navItems.map((item) => (
      <Box key={item.id} display='grid'>
        <Anchor color={color} id={item.id} to={item.to}>{item.text}</Anchor>
      </Box>
    ))}
  </Box>
)

export default NavBar
