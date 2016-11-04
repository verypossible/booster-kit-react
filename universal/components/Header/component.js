/* @flow */
import React from 'react'
import { IndexLink, Link } from 'react-router'

import styles from './styles'
import mark from './assets/mark-color.png'

export const Header = () => (
  <div id='header' className={styles.container}>
    <div className={styles.header}>
      <IndexLink className={styles.logo} to='/' activeClassName={styles.activeRoute}>
        <img src={mark} height='40' width='40' />
      </IndexLink>
      <h1>Spartan Booster Kits</h1>
    </div>
    <div id='nav' className={styles.links}>
      <Link id='react' to='/react' className={styles.link} activeClassName={styles.activeRoute}>
        React Web
      </Link>
    </div>
  </div>
)

export default Header
