import * as React from 'react'

import Box from 'atoms/Box'
import Icon from 'atoms/Icon'
import Image from 'atoms/Image'
import Paragraph from 'atoms/Paragraph'

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
