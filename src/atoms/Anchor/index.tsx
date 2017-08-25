import * as React from 'react'
import atom from 'ui'

import {
  Link,
  NavLink
} from 'lib/router'

import { AnchorProps } from './AnchorProps'

interface MergedProps extends Theme {
  className?: string
}

/** Maps props to styles */
const styles = ({ theme, color }: AnchorProps & MergedProps) => `
  color: ${theme.colors[color] || color}
`

const activeStyle = {
  textDecoration: 'underline'
}

/** Creates a naked anchor element */
const Href = ({ children, ...props}) => React.createElement('a', { ...props }, children)

/** Selects which type of anchor to use based on props */
const GetAnchor: React.SFC<AnchorProps> = ({
  id,
  children,
  className,
  external,
  to,
  navLink
}: AnchorProps & MergedProps) => {
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

/**
 * Returns an anchor element wrapped with a Router `<Link>` by default.
 * It can also be wrapped with a `<NavLink>` if the `navLink` prop is true
 * or a naked `<a>` element if the `external` prop is true.
 */
const Anchor = atom(GetAnchor)`
  ${styles}
`
export default Anchor
