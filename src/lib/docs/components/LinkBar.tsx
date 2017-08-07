import * as React from 'react'
import styled from 'styled-components'

import Anchor from './Anchor'

interface LinkItem {
  navLink?: boolean,
  text: string,
  to: string
}

interface Props {
  links: LinkItem[]
}

const Styles = styled.div`
  display: block;
  height: 100%;
`

const LinkBar: React.SFC<Props> = ({ links }) => (
  <Styles>
    {links.map((link) => <Anchor key={link.to} {...link} />)}
  </Styles>
)

export default LinkBar
