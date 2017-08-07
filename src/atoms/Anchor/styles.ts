import { AnchorStyles } from './types'

export const styles = ({ theme, color }: AnchorStyles) => `
  color: ${theme.colors[color] || color}
`

export const activeStyle = {
  textDecoration: 'underline'
}
