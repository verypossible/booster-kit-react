import styled from 'styled-components'

interface Props {
  color?: string,
  gridArea?: string,
  margin?: string
}

const base = ({ color, gridArea, margin }: Props) => `
  color: ${color || 'black'};
  grid-area: ${gridArea};
  ${margin && `
    margin: ${margin};
  `}
`

export const H1 = styled.h1`
  ${base}
  font-family: Roboto;
`
export const H2 = styled.h2`
  ${base}
  font-family: Roboto;
`
export const H3 = styled.h3`
  ${base}
  font-family: Roboto;
`
export const H4 = styled.h4`
  ${base}
  font-family: Roboto;
  font-weight: 400;
`
export const H5 = styled.h5`
  ${base}
`
export const H6 = styled.h6`
  ${base}
`
