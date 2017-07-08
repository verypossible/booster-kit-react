import * as React from 'react'

import { NavLink } from 'lib/router'

import * as mark from './mark-color.png'

const Header = () => (
  <div id='header' className='container'>
    <div className='header'>
      <NavLink className='logo' to='/' activeClassName='activeRoute'>
        <img src={mark} height='40' width='40' />
      </NavLink>
      <h1>Spartan Booster Kit</h1>
    </div>
    <div id='nav' className='links'>
      <NavLink id='react' to='/react' className='link' activeClassName='activeRoute'>
        React Web
      </NavLink>
    </div>
  </div>
)

export default Header
