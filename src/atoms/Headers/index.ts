import atom from 'ui'

const base = ({ theme, color, fontSize, inverse }: Header) => `
  font-size: ${theme.font.size[fontSize] || `${fontSize}em`};
  color: ${inverse ? theme.colors[`${color}Inverse`] : theme.colors[color]};
  font-family: ${theme.font.family.headings};
`

export const H1 = atom.h1`
  ${base}
`
export const H2 = atom.h2`
  ${base}
`
export const H3 = atom.h3`
  ${base}
`
export const H4 = atom.h4`
  ${base}
`
export const H5 = atom.h5`
  ${base}
`
export const H6 = atom.h6`
  ${base}
`
