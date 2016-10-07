/* @flow */
import React, { Component } from 'react'
import NavBar from 'components/NavBar'

import styles from './styles'

type Props = {
  children: Element,
  toast: Object,
  handleClick: Function,
  type: string,
  message: string
}

const ReactKit = ({children, handleClick}: Props) => {
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
    'to': '/react-web/counter', 'className': 'link', 'activeClassName': 'activeRoute', 'text': 'Counter'
  }, {
    'to': '/react-web/markdown', 'className': 'link', 'activeClassName': 'activeRoute', 'text': 'Markdown'
  }]

export default ReactKit
