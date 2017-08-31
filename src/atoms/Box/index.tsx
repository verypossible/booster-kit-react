import * as React from 'react'

import atom, { css } from 'ui'
import { setBackground, setDisplay } from 'ui/helpers'
import * as setProps from 'ui/props'
import { Common, Flex, Grid, Spacing } from 'ui/props/types'

type BoxTags = 'div' | 'span' | 'section' | 'nav'

export interface BoxProps extends Common, Flex, Grid, Spacing  {
  children?: any,
  className?: string,
  id?: string,
  role?: string,
  tag?: BoxTags
}

const BoxElement = atom.div.attrs({
  bgColor: props => setBackground(props),
  display: props => setDisplay(props)
})`
  ${setProps.common}
  ${setProps.flex}
  ${setProps.grid}
  ${setProps.spacing}
`

const Box: React.SFC<BoxProps> = ({
  children,
  tag,
  ...props
}) => {
  const BoxWithTag = BoxElement.withComponent(tag)
  const RenderBox = !tag ? BoxElement : BoxWithTag

  return <RenderBox {...props}>{children}</RenderBox>
}

export default Box
