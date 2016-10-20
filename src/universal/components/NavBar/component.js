/* @flow */
import React from 'react'
import shortid from 'shortid'
import { Link } from 'react-router'

import styles from './styles'

type Props = {
  navItems: Array
}

const NavBar = (props: Props) => {
  let navElements = props.navItems.map((item) => {
    let navItem = (
      <li id={item.id} key={shortid.generate()}>
        <Link
          to={item.to}
          className={item.className}
          activeClassName={item.activeClassName}
        >
          {item.text}
        </Link>
      </li>
    )
    return navItem
  })
  return (
    <ul className={styles.list}>
      {navElements}
    </ul>
  )
}

NavBar.defaultProps = {
  navItems: [
    {'to': '/', 'className': 'link', 'activeClassName': 'activeRoute', 'text': 'hello', 'id': 'one'},
    {'to': '/', 'className': 'link', 'activeClassName': 'activeRoute', 'text': 'world', 'id': 'two'}
  ]
}

export default NavBar
