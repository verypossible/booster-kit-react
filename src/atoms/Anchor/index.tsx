import * as React from 'react'
import atom from 'ui'

import {
  Link,
  NavLink
} from 'lib/router'

const styles = ({ theme, color }: Anchor) => `
  color: ${theme.colors[color] || color}
`

const activeStyle = {
  textDecoration: 'underline'
}

const Href = ({ children, ...props}) => React.createElement('a', { ...props }, children)

const Anchor: React.SFC<Anchor> = ({
  id,
  children,
  className,
  external,
  to,
  navLink
}) => {
  const common = { className, id }

  const linkProps = { to, ...common }

  return (
    (external && (
      <Href
        children={children}
        href={to}
        {...common}
      />
    )) ||
    (navLink && (
      <NavLink
        activeStyle={activeStyle}
        {...linkProps}
      >
        {children}
      </NavLink>
    )) || (
      <Link
        {...linkProps}
      >
        {children}
      </Link>
    )
  )
}

export default atom(Anchor)`
  ${styles}
`
