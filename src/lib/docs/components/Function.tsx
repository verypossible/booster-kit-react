import * as React from 'react'

import atom from 'ui'

import { Box, H3 } from 'atoms'

import Icon from './Icon'

const border = '1px solid #ccc'
const darkGray = 'rgb(97, 97, 97)'
const Wrapper = atom.div`
  border: ${border};
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "header header header header"
    "func func func func"
    "params params params params"
    "loc loc loc loc";
  width: 800px;
  margin: 20px 0;
`

const Row = atom.div`
  grid-area: ${(props) => props.gridArea};
  ${(props) => props.border &&
    `border-width: ${props.border};
    border-style: solid;
    border-color: #ccc;`
  }
  padding: 0 10px;
  background: ${(props) => props.background};
  align-self: center;
  height: 100%;
`

const Signature = atom.div`
  width: 100%;
`
const Sources = atom.div`
  color: #FFF;
  padding: 10px 0;
`

const Function = ({ args, signature, name, params, sources, returns }) => (
  <Wrapper>
    <Row gridArea='header'>
      <H3>{name}</H3>
    </Row>
    <Row gridArea='func' border='1px 0 1px 0'>
      <Icon icon='function' />{signature}
    </Row>
    <Row gridArea='params'>
      {args}:
    </Row>
    <Row gridArea='loc' background={darkGray}>
      <Sources>{sources.map((s) => s)}</Sources>
    </Row>
  </Wrapper>
)

export default Function
