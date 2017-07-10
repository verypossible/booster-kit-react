import atom from 'ui'

const styles = ({ theme, padding }: Box) => `
  padding: ${theme.paddings[padding] || padding}
  height: 100%;
  width: 100%;
`

export default atom.div`
  ${styles}
`
