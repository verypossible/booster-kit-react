import atom from 'ui'

const base = ({}: Label) => `
  color: inherit;
  font-size: .88em;
`

const Label = atom.label`
  ${base}
`
export default Label
