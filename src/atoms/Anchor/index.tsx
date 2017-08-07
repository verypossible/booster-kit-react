import * as React from 'react'
import atom from 'ui'

import {
  Link,
  NavLink
} from 'lib/router'

import { activeStyle, styles  } from './styles'
import { AnchorProps, AnchorStyles } from './types'

const Href = ({ children, ...props }) => React.createElement('a', { ...props }, children)

const MakeAnchor: React.SFC<AnchorProps> = ({
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

const Anchor = atom(MakeAnchor)`
  ${styles}
`
export { AnchorProps, AnchorStyles }
export default Anchor
