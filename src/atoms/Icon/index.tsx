import * as React from 'react'
import * as Icons from 'react-feather'

import atom, { css } from 'ui'
import { layout } from 'ui/helpers'

import { Logo, Trademark } from './Brand'
import Vendor from './Vendor'

interface Icon extends Theme {
  area?: string,
  color?: string,
  icon?: string,
  className?: string,
  size?: ThemeSizeSelector,
  status?: ThemeStatusSelector
}

const styles = ({ area, color, size, status, theme }: Icon) => css`
  display: block;
  color: ${status && theme.status[status] || theme.colors[color] || color || '#000'};
  width: ${theme.icons.size[size] || size};
  ${area && `
    grid-area: ${area};
  `}
`

const IconSet = {
  ...Icons,
  ...Vendor,
  Logo,
  Trademark
}

const GetIcon: React.SFC<Icon> = ({ className, icon = 'Circle' }) => {
  const RenderIcon = IconSet[icon]
  return <RenderIcon className={className}/>
}

const Icon = atom(GetIcon)`
  ${styles}
`
export default Icon
