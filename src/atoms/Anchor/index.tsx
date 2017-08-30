import * as React from 'react'
import atom from 'ui'
import { layout, Layout } from 'ui/helpers'

import {
  Link,
  NavLink
} from 'lib/router'

import { AnchorProps } from './AnchorProps'

interface MergedProps extends Layout {
  className?: string
}

const makeBorder = border => {
  if (typeof border === 'object') {
    return Object.entries(border).map(([key, value]) => `border-${key}: ${value};`).join(' ')
  }
  return border
}

/** Maps props to styles */
const styles = ({ alignVertical, border, color, theme}: AnchorProps & MergedProps) => `
  color: ${theme.colors[color] || color};
  text-decoration: none;
  font-family: Helvetica;
  ${alignVertical && `vertical-align: ${alignVertical};`}
  ${border && makeBorder(border)}

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
  to,
  navLink
}: AnchorProps & MergedProps) => {
  const common = { className, id }
  const external = to && typeof to === 'string' && to.includes('http')

  const linkProps = { to, ...common }

  return (
    (external && (
      <Href
        children={children}
        href={to}
        target='_blank'
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
  ${layout}
  ${styles}
`
export default Anchor
