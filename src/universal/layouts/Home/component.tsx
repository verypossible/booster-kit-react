import * as React from 'react'

import * as rocket from './rocket.png'

const HomeView: React.SFC<() => void> = () => (
  <div className='container'>
    <div>
      <img
        alt='To infinity and beyond!'
        className='logo'
        src={rocket}
      />
    </div>
    <div className='icon'>
      <p>If you don't see an icon below, something is wrong with icon fonts...</p>
      <i className='icon-icon-mobile' />
    </div>
  </div>
)

export default HomeView
