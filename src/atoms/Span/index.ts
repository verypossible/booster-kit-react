import atom from 'ui'

const base = ({ theme, color }: Span) => `
  color: ${theme.colors[color] || color || '#000'};
`

export default atom.span`
  ${base}
`
