import atom from 'ui'

const base = ({ area, margin, pad, theme, color, status }: Span) => `
  ${area && `
    grid-area: ${area};
  `}
  color: ${theme.colors[color] || theme.status[status] || color || '#000'};
  font-family: Helvetica;
  margin: ${theme.layout.margin[margin] || margin || 0};
  padding: ${theme.layout.pad[pad] || pad || 0};
`

const Span = atom.span`
  ${base}
`
export default Span
