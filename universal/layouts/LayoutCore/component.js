import 'styles/core'
import 'styles/fonts/icomoon'
import 'styles/vendor/normalize'

import React from 'react'
import Header from 'components/Header'
import styles from './styles'

import { toast } from 'modules/Toast'

const ToastContainer = toast.container

export const CoreLayout = ({ children }) => (
  <div className={styles.mainContainer}>
    <ToastContainer />
    <Header />
    <div className={styles.bodyContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
