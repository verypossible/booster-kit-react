import * as React from 'react'
import styled from 'styled-components'

interface Props {
  area?: string,
  children?: any,
  className?: string,
  color?: string,
  grid?: boolean,
  border?: string,
  background?: string,
  justifyItems?: string,
  padding?: string,
}

const Component: React.SFC<Props> = ({ children, className }) =>
  <div className={className}>{children}</div>

const applyBorder = ({ border }: Props) => border && `
  border-width: ${border};
  border-style: solid;
  border-color: #ccc;
`

const applyBackground = ({ background }: Props) => background && `
  background: ${background};
`

const applyAlignment = ({ justifyItems }: Props) => justifyItems && `
  display: grid;
  justify-items: ${justifyItems};
`

const ItemRow = styled(Component)`
  grid-area: ${props => props.area};
  color: ${props => props.color || 'black'};
  padding: ${props => props.padding || '0'};
  background: ${props => props.background || 'none'};
  height: 100%;
  width: 100%;
  ${applyBorder}
  ${applyBackground}
  ${applyAlignment}
`

export default ItemRow
