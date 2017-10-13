import * as React from 'react'
import styled from 'styled-components'

import { NavItem } from '../types'

import Anchor from './Anchor'

interface StyleProps {
  gridArea?: string,
  inline?: boolean
}

export interface Props extends StyleProps {
  color?: string,
  links: NavItem[],
  nav?: boolean
}

const Links = styled.div`
  ${(props: StyleProps) => props.gridArea && `
    grid-area: ${props.gridArea};
  `}
  text-align: center;
  overflow: hidden;
`

const Link = styled.div`
  display: ${(props: StyleProps) => props.inline ? 'inline' : 'block'};
  margin: ${(props: StyleProps) => props.inline ? '0 0.5em' : '0.5em 0'};
`

const LinkBar: React.SFC<Props> = ({
  color = 'white',
  gridArea,
  inline,
  links,
  nav
}) => (
  <Links gridArea={gridArea}>
    {links && links.map(link => (
      <Link inline={inline} key={link.text}>
        <Anchor color={color} {...link} navLink={nav} />
      </Link>
    ))}
  </Links>
)

export default LinkBar
