/* @flow */
import React from 'react'
import NavBar from 'components/NavBar'

import styles from './styles.css'
import type { NavElement } from 'lib/types'

type Props = {
  children: any,
  navItems: Array<NavElement>,
  handleClick: Function,
}

const Layout = ({children, handleClick}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <NavBar navItems={navItems} />
        <button onClick={handleClick}>Show The Toast</button>
      </div>
      <div className={styles.right}>
        {children}
      </div>
    </div>
  )
}

const navItems = [
  {
    'to': '/react/counter', 'className': 'link', 'activeClassName': 'activeRoute', 'text': 'Counter', id: 'counterLink'
  }, {
    'to': '/react/markdown', 'className': 'link', 'activeClassName': 'activeRoute', 'text': 'Markdown'
  }]

export default Layout
