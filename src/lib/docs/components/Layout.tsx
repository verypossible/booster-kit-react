import styled from 'styled-components'

export const Content = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto 50px;
  grid-template-areas:
    "main main"
    "utility utility";
  overflow: scroll;
  padding-right: 4em;
`

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: auto auto;
  grid-template-areas:
    "nav content";
  grid-gap: 0em 3em;
  height: 100%;
`

export const Nav = styled.div`
  background: black;
  color: white;
  grid-area: nav;
`
