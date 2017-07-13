import atom from 'ui'

import styles from './buttonStyles'

const getButton = ({
  type = 'flat'
}: Button) => styles[type]

const Button = atom.button`
  ${getButton}
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
