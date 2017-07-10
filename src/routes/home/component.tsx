import * as React from 'react'

import {
  Box,
  Icon,
  Image,
  Paragraph
} from 'atoms'

import * as rocket from './rocket.png'

const HomeView = () => (
  <Box>
    <Image
      alt='To infinity and beyond!'
      className='logo'
      src={rocket}
    />
    <Paragraph>If you don't see an icon below, something is wrong with icon fonts...</Paragraph>
    <Icon icon='Logo' status='alert' />
  </Box>
)

export default HomeView
