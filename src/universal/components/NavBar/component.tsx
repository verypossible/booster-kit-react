import * as React from 'react'

import { Link } from 'lib/router'

const NavBar: React.SFC<NavBarProps> = ({ navItems }) => {
  const navElements = navItems.map((item) => {
    const navItem = (
      <li id={item.id} key={item.id}>
        <Link
          to={item.to}
          className={item.className}
        >
          {item.text}
        </Link>
      </li>
    )
    return navItem
  })
  return (
    <ul className='list'>
      {navElements}
    </ul>
  )
}

export default NavBar
