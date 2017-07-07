import * as React from 'react'

import { Link } from 'lib/router'

interface ButtonProps {
  children: any,
  linkTo: string,
  color: string,
  disabled: boolean
}

export const Button: React.SFC<ButtonProps> = ({
  children,
  linkTo = '/',
  color = 'light',
  disabled
}) => {
  return (
    <Link
      to={linkTo}
      className={color}
      disabled={disabled}
    >
      {children}
    </Link>
  )
}

export default Button
