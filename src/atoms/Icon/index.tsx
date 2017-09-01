import * as React from 'react'
import * as Icons from 'react-feather'

import atom from 'ui'
import * as setProps from 'ui/props'
import { Color, Common, Spacing } from 'ui/props/types'

import { Logo, Trademark } from './Brand'
import { CustomCircle } from './CustomCircle'
import Vendor from './Vendor'

export interface Icon extends Color, Common, Spacing {
  fill?: string,
  icon?: string,
  className?: string,
  size?: string
}

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

const Icon = atom(GetIcon).attrs({
  width: (props: Icon) => (props.size || props.width)
})`
  ${setProps.color}
  ${setProps.common}
  ${setProps.spacing}
`
export default Icon
