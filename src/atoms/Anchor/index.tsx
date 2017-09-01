import * as React from 'react'
import atom, { css } from 'ui'
import { border as makeBorder } from 'ui/helpers'
import * as setProps from 'ui/props'
import { Color, Common, Font, Spacing } from 'ui/props/types'

import {
  Link,
  NavLink
} from 'lib/router'

export interface AnchorProps extends Color, Common, Font, Spacing {
  alignVertical?: string,
  border?: string,
  children?: any,
  className?: string,
  id?: string,
  navLink?: boolean,
  to: string | object,
  type?: string
}

/** Maps props to styles */
const anchorStyles = ({ alignVertical, border }: AnchorProps) => css`
  text-decoration: none;
  ${alignVertical && `vertical-align: ${alignVertical};`}
  ${border && makeBorder(border)}
`

const activeStyle = {
  textDecoration: 'underline'
}

/** Selects which type of anchor to use based on props */
const GetAnchor: React.SFC<AnchorProps> = ({
  id,
  children,
  className,
  to,
  navLink
}: AnchorProps) => {
  const external = to && typeof to === 'string' && to.includes('http')
  const shared = { className, id }
  const linkProps = { to, ...shared }

  const Naked = React.createElement('a', { href: to, target: '_blank', ...shared }, children)

  return (
    external && Naked ||
    navLink && <NavLink {...linkProps} activeStyle={activeStyle}>{children}</NavLink> ||
    <Link {...linkProps}>{children}</Link>
  )
}

/**
 * Returns an anchor element wrapped with a Router `<Link>` by default.
 * It can also be wrapped with a `<NavLink>` if the `navLink` prop is true
 * or a naked `<a>` element if the `external` prop is true.
 */
const Anchor = atom(GetAnchor)`
  ${setProps.color}
  ${setProps.common}
  ${setProps.font}
  ${setProps.spacing}
  ${anchorStyles}
`
export default Anchor
