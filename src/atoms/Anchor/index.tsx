import * as React from 'react'
import atom, { css } from 'ui'
import { border as makeBorder, setDisplay } from 'ui/helpers'
import * as setProps from 'ui/props'
import { Common, Spacing } from 'ui/props/types'

import {
  Link,
  NavLink
} from 'lib/router'

import { AnchorProps } from './AnchorProps'

interface MergedProps {
  className?: string
}

export interface AnchorProps extends MergedProps, Common {
  alignVertical?: string,
  border?: string,
  children?: any,
  color?: string,
  inline?: boolean,
  id?: string,
  navLink?: boolean,
  to: string | object,
  type?: string
}

/** Maps props to styles */
const anchorStyles = ({ alignVertical, border, color, theme }: AnchorProps) => css`
  color: ${theme.colors[color] || color};
  text-decoration: none;
  font-family: Helvetica;
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
  const Nav = React.createElement(NavLink, { activeStyle, ...linkProps }, children)
  const RouterLink = React.createElement(Link, { ...linkProps }, children)

  return (
    external && Naked ||
    navLink && Nav ||
    RouterLink
  )
}

/**
 * Returns an anchor element wrapped with a Router `<Link>` by default.
 * It can also be wrapped with a `<NavLink>` if the `navLink` prop is true
 * or a naked `<a>` element if the `external` prop is true.
 */
const Anchor = atom(GetAnchor).attrs({
  display: props => setDisplay(props)
})`
  ${setProps.common}
  ${setProps.spacing}
  ${anchorStyles}
`
export default Anchor
