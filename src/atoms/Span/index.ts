import atom from 'ui'

const base = ({ theme, color, status }: Span) => `
  color: ${theme.colors[color] || theme.status[status] || color || '#000'};
`

const Span = atom.span`
  ${base}
`
export default Span
