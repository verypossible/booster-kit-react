/* @flow */
import React from 'react'
import NavBar from 'components/NavBar'

import styles from './styles'

type Props = {
  children: Element
}

const navItems = [
  {
    'to': '/react-web/counter', 'className': 'link', 'activeClassName': 'activeRoute', 'text': 'Counter'
  }, {
    'to': '/react-web/markdown', 'className': 'link', 'activeClassName': 'activeRoute', 'text': 'Markdown'
  }]

const ReactKit = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.left}>
      <NavBar navItems={navItems} />
    </div>
    <div className={styles.right}>
      {props.children}
    </div>
  </div>
)

export default ReactKit
