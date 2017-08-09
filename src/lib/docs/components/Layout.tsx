import styled from 'styled-components'

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: auto auto;
  grid-template-areas:
    "nav content";
  height: 100vh;
`

export const Nav = styled.div`
  background: black;
  color: white;
  grid-area: nav;
  height: 100vh;
`

export const Content = styled.div`
  grid-area: content;
  height: 100vh;
`
