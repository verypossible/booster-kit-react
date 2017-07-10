import atom from 'ui'

const styles = ({ color, theme, invert }: Paragraph) => `
  color: ${color || (!invert && theme.colors.primaryColor) || (invert && theme.colors.primaryColorInverted) || '#000'}
`
export default atom.p`
  ${styles}
`
