/* @flow */
import React from 'react'
import { NavLink } from 'lib/router'

import styles from './styles.css'
import mark from './assets/mark-color.png'

const Header = () => (
  <div id='header' className={styles.container}>
    <div className={styles.header}>
      <NavLink className={styles.logo} to='/' activeClassName={styles.activeRoute}>
        <img src={mark} height='40' width='40' />
      </NavLink>
      <h1>Spartan Booster Kits</h1>
    </div>
    <div id='nav' className={styles.links}>
      <NavLink id='react' to='/react' className={styles.link} activeClassName={styles.activeRoute}>
        React Web
      </NavLink>
    </div>
  </div>
)

export default Header
