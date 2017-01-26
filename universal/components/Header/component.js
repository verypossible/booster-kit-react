/* @flow */
import React from 'react'
import { Link } from 'react-router'

import styles from './styles.css'
import mark from './assets/mark-color.png'

const Header = () => (
  <div id='header' className={styles.container}>
    <div className={styles.header}>
      <Link className={styles.logo} to='/' activeClassName={styles.activeRoute}>
        <img src={mark} height='40' width='40' />
      </Link>
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
