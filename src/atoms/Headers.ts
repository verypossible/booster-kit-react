import styled from 'ui'

interface HeaderProps {
  theme?: ThemeInterface,
}

const base = ({ theme }: HeaderProps) => `
  color: ${theme.primaryColorInverted};
  font-family: ${theme.headings.family};
`

export const H1 = styled.h1`
  ${base}
`
export const H2 = styled.h2`
  ${base}
`
export const H3 = styled.h3`
  ${base}
`
export const H4 = styled.h4`
  ${base}
`
export const H5 = styled.h5`
  ${base}
`
export const H6 = styled.h6`
  ${base}
`
