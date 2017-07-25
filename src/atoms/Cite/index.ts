import atom from 'ui'

const base = ({ theme, color }: Cite) => `
  color: ${color || theme.colors.primaryColorInverted || 'green'};
  font-size: 12px;
`

const Cite = atom.cite`
  ${base}
`
export default Cite
