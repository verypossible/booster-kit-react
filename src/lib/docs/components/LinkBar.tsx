import * as React from 'react'
import styled from 'styled-components'

import Anchor from './Anchor'

interface LinkItem {
  navLink?: boolean,
  text: string,
  to: string
}

export interface Props {
  links: LinkItem[],
  nav?: boolean
}

const Links = styled.div`
  display: block;
  height: 100%;
`

const Link = styled.div`
  display: block;
`

const LinkBar: React.SFC<Props> = ({ links, nav }) => (
  <Links>
    {links.map((link) => (
      <Link key={link.text}>
        <Anchor color='white' {...link} navLink={nav} />
      </Link>
    ))}
  </Links>
)

export default LinkBar
