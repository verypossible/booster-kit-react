import * as React from 'react'

import atom from 'ui'
import * as setProps from 'ui/props'
import { BgColor, Color, Common, Flex, Grid, Spacing } from 'ui/props/types'

type BoxTags = 'div' | 'span' | 'section' | 'nav'

export interface BoxProps extends BgColor, Color, Common, Grid, Flex, Spacing  {
  children?: any,
  className?: string,
  id?: string,
  role?: string,
  tag?: BoxTags
}

const BoxElement: React.SFC<BoxProps> = ({
  children,
  className
}) => <div className={className}>{children}</div>

const Box = atom(BoxElement)`
  ${setProps.bgColor}
  ${setProps.color}
  ${setProps.common}
  ${setProps.flex}
  ${setProps.grid}
  ${setProps.spacing}
`

const BoxWithTag = ({ tag, ...props }) => {
  const El = Box.withComponent(tag)
  return <El {...props} />
}

export default props => !props.tag ? <Box {...props} /> : <BoxWithTag {...props} />
