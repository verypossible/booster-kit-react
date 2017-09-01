import styled from 'styled-components'

export const Content = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto 50px;
  grid-template-areas:
    "main main"
    "utility utility";
  overflow: scroll;
  padding-right: 4em;
  width: 100%;
`

export const Grid = styled.section`
  display: grid;
  grid-template-columns: [nav] 20% [content] 80% [content-end];
  grid-template-rows: auto;
  grid-gap: 0em 2em;
  height: 100%;
  width: 100%;
`

export const Nav = styled.div`
  background: black;
  color: white;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`
