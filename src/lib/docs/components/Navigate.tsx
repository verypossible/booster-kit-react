import * as React from 'react'
import styled from 'styled-components'

import { DocsHistory } from '../types'

import Icon from './Icon'

type GoTo = 'back' | 'forward'

interface Props extends DocsHistory {
  children?: React.ReactNode,
  className?: string,
  color?: string,
  swapIcon?: boolean,
  to?: GoTo,
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
  history: { goBack, goForward },
  swapIcon
}) => {
  const RenderIcon = <Icon color={color} icon={icon[to]} size='small' margin='0' />
  return (
    <button className={className} onClick={() => to === 'back' ? goBack() : goForward()}>
      {!swapIcon && <span>{children}</span>}{!swapIcon && RenderIcon}
      {swapIcon && RenderIcon}{swapIcon && <span>{children}</span>}
    </button>
  )
}

const Navigate = styled(Button)`
  display: flex;
  align-items: center;
  background: none;
  fill: none;
  border: none;
  width: 50px;

  > span {
    margin-left: 1em;
    float: left;
  }

  > i {
    float: left;
  }
`

export default Navigate
