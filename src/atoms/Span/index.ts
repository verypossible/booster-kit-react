import atom from 'ui'

const base = ({ theme, color }: Span) => `
  color: ${theme.colors[color] || color || '#000'};
`

const Span = atom.span`
  ${base}
`
export default Span
