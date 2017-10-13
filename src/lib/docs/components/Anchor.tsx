import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  className?: any,
  navLink?: boolean,
  text: string,
  to: string
}

interface Styles {
  color?: string
}

const Anchor: React.SFC<Props & Styles> = ({ navLink, text, ...props }) => (
  (navLink && <NavLink {...props}>{text}</NavLink>) ||
  <Link {...props}>{text}</Link>
)

export default styled(Anchor)`
  color: ${props => props.color || 'black' };
  font-family: Roboto, sans-serif;
`
