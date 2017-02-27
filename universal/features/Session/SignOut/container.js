import React from 'react'
import { connect } from 'react-redux'

import { signOut } from 'modules/session'

import styles from './styles.css'

const SignOut = () => {
  return (
    <div className={styles.container}>
      <a href='#' onClick={signOut}>Sign Out</a>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
})

export default connect(null, mapDispatchToProps)(SignOut)
