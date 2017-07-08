import * as React from 'react'

import Box from 'atoms/Box'
import Icon from 'atoms/Icon'

import * as rocket from './rocket.png'

const HomeView: React.SFC<() => void> = () => (
  <Box>
    <div>
      <img
        alt='To infinity and beyond!'
        className='logo'
        src={rocket}
      />
    </div>
    <div className='icon'>
      <p>If you don't see an icon below, something is wrong with icon fonts...</p>
      <Icon icon='very-logo' />
    </div>
  </Box>
)

export default HomeView
