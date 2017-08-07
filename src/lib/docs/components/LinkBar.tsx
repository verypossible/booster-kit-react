import * as React from 'react'
import styled from 'styled-components'

import Anchor from './Anchor'

interface LinkItem {
  to: string,
  children?: React.ReactNode,
  navLink?: boolean,
  text?: string
}

interface Props {
  links: LinkItem[]
}

const Styles = styled.div`
  height: 100%;
`

const LinkBar: React.SFC<Props> = ({ links }) => (
  <Styles>
    {links.map((link) => <Anchor key={link.to} {...link} />)}
  </Styles>
)

export default LinkBar
