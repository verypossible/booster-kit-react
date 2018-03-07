import atom from 'ui'

const styles = ({ color, theme, invert }: Paragraph) => `
  color: ${color ||
    (!invert && theme.colors.primaryColor) ||
    (invert && theme.colors.primaryColorInverted) ||
    '#000'}
`
const Paragraph = atom.p`
  ${styles}
`
export default Paragraph
