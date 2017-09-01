import * as React from 'react'

import atom from 'ui'

import Icon from '../Icon'
import Span from '../Span'

import { ButtonProps } from './ButtonProps'
import buttonTypes from './buttonStyles'

const getButton = ({
  type = 'flat'
}: ButtonProps) => buttonTypes[type]

const ButtonElement: React.SFC<ButtonProps> = ({
  children, icon, status, iconColor, className
}) => (
  <button className={className}>
    {icon && (
      <Span>
        <Icon status={status} color={iconColor} icon={icon} />
      </Span>
    )}
    {children}
  </button>
)

const Button = atom(ButtonElement)`
  ${getButton}
  font-family: ${(props: ButtonProps) => props.theme.font.family.text};
  border: 1px solid;
  font-size: 1em;
  line-height: 2em;
  min-width: 120px;
  padding: 0.8em 1.5em;
  text-align: center;
  text-decoration: none;
  text-transform: ${(props: ButtonProps) => (props.text || 'none')};
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

export default Button
