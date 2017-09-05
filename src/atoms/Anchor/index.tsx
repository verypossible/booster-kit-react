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
  activeStyle?: object,
  alignVertical?: string,
  border?: string,
  children?: any,
  className?: string,
  id?: string,
  navLink?: boolean,
  to: string | object,
  type?: string
}

const setComponent = (Component, props, children) => React.createElement(Component, props, children)

/** Selects which type of anchor to use based on props */
const GetAnchor: React.SFC<AnchorProps> = ({
  activeStyle,
  id,
  children,
  className,
  to,
  navLink
}: AnchorProps) => {
  const external = to && typeof to === 'string' && to.includes('http')
  const shared = { className, id }
  const hrefProps = { href: to, target: '_blank', ...shared }
  const linkProps = { to, ...shared }
  const navLinkProps = { activeStyle, ...linkProps }
  return (
    external && setComponent('a', hrefProps, children) ||
    navLink && setComponent(NavLink, navLinkProps, children) ||
    setComponent(Link, linkProps, children)
  )
}

const active = {
  textDecoration: 'underline'
}

/** Maps props to styles */
const anchorStyles = ({ alignVertical, border }: AnchorProps) => css`
  text-decoration: none;
  ${alignVertical && `vertical-align: ${alignVertical};`}
  ${border && makeBorder(border)}
`

/**
 * Returns an anchor element wrapped with a Router `<Link>` by default.
 * It can also be wrapped with a `<NavLink>` if the `navLink` prop is true
 * or a naked `<a>` element if the `external` prop is true.
 */
const Anchor = atom(GetAnchor).attrs({
  activeStyle: active
})`
  ${setProps.color}
  ${setProps.common}
  ${setProps.font}
  ${setProps.spacing}
  ${anchorStyles}
`
export default Anchor
