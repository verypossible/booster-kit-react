import * as React from 'react'

import {
  Anchor,
  Box,
  H1,
  Icon
} from 'atoms'

const Header = () => (
  <Box id='header'>
    <Anchor to='/' navLink>
      <Icon icon='Trademark' />
    </Anchor>
    <H1>Spartan Booster Kit</H1>
    <Anchor to='/docs' navLink>Docs</Anchor>
  </Box>
)

export default Header
