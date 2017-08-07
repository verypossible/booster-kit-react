import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  className?: string,
  navLink?: boolean,
  text: string,
  to: string
}

interface Styles {
  color?: string
}

const RouterLink = ({ text, to }) =>
  <Link to={to}>{text}</Link>

const RouterNavLink = ({ text, to }) =>
  <NavLink to={to}>{text}</NavLink>

const Anchor: React.SFC<Props & Styles> = ({ navLink, ...props }) => (
  (navLink && <RouterNavLink {...props} />) ||
  <RouterLink {...props} />
)

export default styled(Anchor)`
  color: ${(props) => props.color || 'black' };
`
