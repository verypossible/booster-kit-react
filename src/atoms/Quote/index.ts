import atom from 'ui'

const base = ({ theme, color }: Quote) => `
  color: ${color || theme.colors.primaryColorInverted || 'green'};
  font-size: 22px;
`

const Quote = atom.q`
  ${base}
`
export default Quote
