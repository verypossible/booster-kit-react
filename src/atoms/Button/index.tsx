import * as React from 'react'

import atom from 'ui'

import Icon from '../Icon'
import Span from '../Span'

import styles from './buttonStyles'

const getButton = ({
  type = 'flat'
}: Button) => styles[type]

const ButtonElement = atom.button`
  ${getButton}
  font-family: ${(props) => props.theme.font.family.text};
  border: 1px solid;
  font-size: 1em;
  line-height: 2em;
  min-width: 120px;
  padding: 0.8em 1.5em;
  margin-right: 0.8em;
  text-align: center;
  text-decoration: none;
  text-transform: ${(props: Button) => (props.text || 'none')};
  white-space: nowrap;
  cursor: pointer;

  > span {
    width: 3rem;
    height: 2rem;
    float: left;
    margin-left: -1em;
    margin-right: 1em;
    transition: all 0.5s ease 0s;

    > svg {
      width: 100%;
      height: 100%;
      transition: fill cubic-bezier(0.51, 0, 0.42, 1) 150ms;
    }
  }
`

const Button: React.SFC<Button> = ({
  children, icon, status, iconColor, ...props
}) => {
  const WithIcon = (
    <Span>
      <Icon status={status} color={iconColor} icon={icon} />
    </Span>
  )

  return (
    <ButtonElement {...props}>
      {icon && WithIcon}{children}
    </ButtonElement>
  )
}

export default Button
