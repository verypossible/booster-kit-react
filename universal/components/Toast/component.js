/* @flow */
import React from 'react'

type Props = {
  type: string,
  message: string
}

// Markup
const width = '100%'
const height = '100px'

const styles = {
  notice: {
    color: 'green',
    width: width,
    height: height
  },
  warning: {
    color: 'orange',
    width: width,
    height: height
  },
  error: {
    color: 'red',
    width: width,
    height: height
  }
}

const Toast = ({type, message}: Props) => {
  return (
    <div>
      <div style={styles[type]}>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default Toast
