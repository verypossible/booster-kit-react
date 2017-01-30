/* @flow */
import React from 'react'
import { Link } from 'react-router'

import NavBar from '../NavBar'

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
      <NavBar navItems={links} />
    </div>
  </div>
)

const links = [
  {'to': '/react', 'className': 'link', 'activeClassName': 'activeRoute', 'text': 'React', 'id': 'react'},
  {'to': '/signup', 'className': 'link', 'activeClassName': 'activeRoute', 'text': 'Sign Up', 'id': 'signUp'},
  {'to': '/login', 'className': 'link', 'activeClassName': 'activeRoute', 'text': 'Log In', 'id': 'logIn'}
]

export default Header
