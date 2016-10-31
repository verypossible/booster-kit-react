import React from 'react'
import Rocket from './assets/rocket.png'
import styles from './styles'

export const HomeView = () => (
  <div className={styles.container}>
    <div>
      <img
        alt='To infinity and beyond!'
        className={styles.logo}
        src={Rocket} />
    </div>
    <div className={styles.icon}>
      <p>If you don't see an icon below, something is wrong with icon fonts...</p>
      <i className='icon-icon-mobile' />
    </div>
  </div>
)

export default HomeView
