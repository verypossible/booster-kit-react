import React from 'react'
import { IndexLink, Link } from 'react-router'

import styles from './styles'
import mark from './assets/mark-color.png'

const Header = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <IndexLink className={styles.logo} to='/' activeClassName={styles.activeRoute}>
        <img src={mark} height='40' width='40' />
      </IndexLink>
      <h1>Spartan Booster Kits</h1>
    </div>
    <div className={styles.links}>
      <Link to='/see-do' className={styles.link} activeClassName={styles.activeRoute}>
        See|Do
      </Link>
      <Link to='/grays' className={styles.link} activeClassName={styles.activeRoute}>
        Grays
      </Link>
      <Link to='/component-library' className={styles.link} activeClassName={styles.activeRoute}>
        Component Library
      </Link>
      <Link to='/style-guide' className={styles.link} activeClassName={styles.activeRoute}>
        Style Guide
      </Link>
      <Link to='/react-web' className={styles.link} activeClassName={styles.activeRoute}>
        React Web
      </Link>
      <Link to='/react-native' className={styles.link} activeClassName={styles.activeRoute}>
        React Native
      </Link>
      <Link to='/phoniex' className={styles.link} activeClassName={styles.activeRoute}>
        Phoenix
      </Link>
      <Link to='/rails' className={styles.link} activeClassName={styles.activeRoute}>
        Rails
      </Link>
    </div>
  </div>
)

export default Header
