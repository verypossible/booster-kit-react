import * as React from 'react'

import atom, { css } from 'ui'
import {
  gridContainer,
  GridContainer,
  gridItem,
  GridItem,
  layout,
  Layout
  TextAlign
} from 'ui/helpers'

type BoxTags = 'div' | 'span' | 'section'

interface BoxProps extends GridContainer, GridItem, Layout  {
  background?: string,
  children?: any,
  className?: string,
  id?: string,
  inverse?: boolean
  role?: string,
  tag?: BoxTags,
  textAlign?: TextAlign
}

const setBackground = (background, inverse, colors) => `
  ${
    colors[background] ||
    (inverse && colors.backgroundInverse) ||
    colors.background
  }
`

const boxStyles = ({
  background,
  inverse,
  textAlign,
  theme: { colors }
}: BoxProps) => `
  ${(background || inverse) && `background-color: ${setBackground(background, inverse, colors)};`},
  ${textAlign && `textAlign: ${textAlign};`}
`

const Box: React.SFC<BoxProps> = ({
  children,
  tag,
  ...props
}) => {
  const BoxElement = atom.div`
    ${gridContainer}
    ${gridItem}
    ${layout}
    ${boxStyles}
  `

  if (tag) {
    /** If a custom DOM tag is specified, this replaces the tag used with the value passed */
    const BoxWithTag = BoxElement.withComponent(tag)
    return <BoxWithTag {...props}>{children}</BoxWithTag>
  }

  return <BoxElement {...props}>{children}</BoxElement>
}

export default Box
