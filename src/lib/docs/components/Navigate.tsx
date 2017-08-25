import * as React from 'react'
import styled from 'styled-components'

import { DocsHistory } from '../types'

import Icon from './Icon'

type GoTo = 'back' | 'forward'

interface Props extends DocsHistory {
  children?: React.ReactNode,
  className?: string,
  color?: string,
  to?: GoTo
}

const icon = {
  back: 'ArrowLeft',
  forward: 'ArrowRight'
}

const Button: React.SFC<Props> = ({
  children,
  className,
  color,
  to = 'back',
  history: { goBack, goForward }
}) => (
  <button className={className} onClick={() => to === 'back' ? goBack() : goForward()}>
    {children || <Icon color={color} icon={icon[to]} size='small' margin='0' />}
  </button>
)

const Navigate = styled(Button)`
  background: none;
  fill: none;
  border: none;
`

export default Navigate
