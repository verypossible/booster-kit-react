import atom from 'ui'

import buttonStyles from './buttonStyles'

const selectButtonStyles = ({
  style = 'flat',
  theme
}: Button) => (theme[style] || buttonStyles.flat)

const Button = atom.button`
  ${selectButtonStyles}
  font-family: ${(props) => props.theme.font.family.text};
  border: 1px solid;
  border-radius: 10px;
  font-size: 1em;
  line-height: 1.5em;
  min-width: 120px;
  padding: 0.8em 1.2em 0.7em;
  margin-right: 0.8em;
  text-align: center;
  text-decoration: none;
  text-transform: ${(props: Button) => (props.text || 'uppercase')};
  white-space: nowrap;
  cursor: pointer;
`
export default Button
