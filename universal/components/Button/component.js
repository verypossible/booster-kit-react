/* @flow */
import React from 'react'
import { Link } from 'react-router'

import styles from './styles.css'

type Props = {
  children: any,
  handleClick: Function,
  linkTo: string,
  color: string,
  segmentProps: Object,
  disabled: bool,
}

export const Button = ({ children, linkTo, color, handleClick, segmentProps, disabled }: Props) => {
  return (
    <Link
      to={linkTo}
      className={styles[color]}
      onClick={handleClick}
      activeClassName={styles.activeStyle}
      disabled={disabled}
    >
      {children}
    </Link>
  )
}

Button.defaultProps = {
  buttonText: 'Join Us',
  linkTo: '/',
  color: 'light'
}

export default Button
