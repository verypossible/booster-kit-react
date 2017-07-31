import * as React from 'react'

import {
  Anchor,
  Box,
  H1,
  Icon
} from 'atoms'

const Header = () => (
  <Box id='header' role='Header' data-thing='thing'>
    <Anchor to='/' navLink>
      <Icon icon='Trademark' size='xXLarge' />
    </Anchor>
    <H1 color='rgb(144,37,147)'>Spartan Booster Kit</H1>
    <Anchor to='/docs' navLink>Docs</Anchor>
  </Box>
)

export default Header
