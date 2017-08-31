import * as React from 'react'
import * as Icons from 'react-feather'

import atom, { css } from 'ui'
import * as setProps from 'ui/props'
import { Common } from 'ui/props/types'

import { Logo, Trademark } from './Brand'
import { CustomCircle } from './CustomCircle'
import Vendor from './Vendor'

interface Icon extends Common {
  color?: string,
  fill?: string,
  icon?: string,
  className?: string,
  status?: ThemeStatusSelector
}

const styles = ({ area, color, display, margin, pad, size, status, theme }: Icon) => css`
  color: ${status && theme.status[status] || theme.colors[color] || color || theme.colors.primary};
`

const IconSet = {
  CustomCircle,
  Logo,
  Trademark,
  ...Icons,
  ...Vendor
}

const GetIcon: React.SFC<Icon> = ({ className, color, fill, icon = 'Circle' }) => {
  const RenderIcon = IconSet[icon]
  const svgProps = { color, fill, className }
  return <RenderIcon {...svgProps} />
}

const Icon = atom(GetIcon)`
  ${setProps.common}
  ${styles}
`
export default Icon
