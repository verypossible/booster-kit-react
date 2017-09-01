import * as React from 'react'

import {
  Anchor,
  Box,
  Header,
  Icon
} from 'atoms'

const MainHeader = () => (
  <Box id='header' role='Header' data-thing='thing'>
    <Anchor to='/' navLink>
      <Icon icon='Trademark' size='xXLarge' />
    </Anchor>
    <Header color='rgb(144,37,147)'>Spartan Booster Kit</Header>
    <Anchor to='/docs' navLink>Docs</Anchor>
  </Box>
)

export default MainHeader
