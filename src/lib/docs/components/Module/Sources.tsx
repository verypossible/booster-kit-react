import * as React from 'react'
import styled from 'styled-components'

interface StyleProps {
  area: string
}

const StyleSource = styled.div`
  grid-area: ${(props: StyleProps) => props.area};
  color: #ccc;
  padding: 10px 0;
  font-family: Roboto;
`

const Sources = ({ area, sources }) => (
  <StyleSource area={area}>loc: {sources.map(s => `${s.fileName}:${s.line}`)}</StyleSource>
)

export default Sources
