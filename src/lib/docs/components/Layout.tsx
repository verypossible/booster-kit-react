import * as React from 'react'
import styled from 'styled-components'

interface Props {
  content: React.ReactNode,
  nav: React.ReactNode
}

const Grid = styled.section`
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: auto auto;
  grid-template-areas:
    "nav content"
`

const Nav = styled.div`
  background: black;
  color: white;
  grid-area: nav;
`

const Content = styled.div`
  grid-area: content;
`

const DocsLayout: React.SFC<Props> = ({ nav, content }) => (
  <Grid>
    <Nav>
      {nav}
    </Nav>
    <Content>
      {content}
    </Content>
  </Grid>
)

export default DocsLayout
