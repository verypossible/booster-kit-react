/* $FlowIssue - Is not reading naked CSS imports correctly */
import 'styles/core'
import 'styles/fonts/icomoon'
import 'styles/vendor/normalize'

import React from 'react'
import Header from 'components/Header'
import styles from './styles.css'

import { toast } from 'modules/Toast'

const ToastContainer = toast.container

export const LayoutCore = ({ children }) => (
  <section className={styles.mainContainer}>
    <ToastContainer />
    <Header />
    <div className={styles.bodyContainer}>
      {children}
    </div>
  </section>
)

LayoutCore.propTypes = {
  children: React.PropTypes.any.isRequired
}

export default LayoutCore
