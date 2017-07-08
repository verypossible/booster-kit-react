import styled from 'ui'

interface ButtonProps {
  theme?: ThemeInterface,
  fill?: boolean
}

const styles = ({
  theme,
  fill = false
}: ButtonProps) => `
  color: ${fill ? '#FFF' : theme.colors.action};
  background-color: ${fill ? theme.colors.action : '#FFF'};
  border-color: ${theme.colors.action};
  font-family: ${theme.font.family};
  border: 1px solid;
  border-radius: 10px;
  font-size: 1em;
  line-height: 1.5em;
  min-width: 120px;
  padding: 0.8em 1.2em 0.7em;
  margin-right: 0.8em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    color: ${fill ? theme.colors.action : '#FFF'};
    background-color: ${fill ? '#FFF' : theme.colors.action};
  }
`

const Button = styled.button`
  ${styles}
`

export default Button
