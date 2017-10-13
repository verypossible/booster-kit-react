import * as React from 'react'

import atom, { css } from 'ui'

import * as setProps from 'ui/props'
import { Color } from 'ui/props/types'

interface HeaderProps extends Color {
  children?: any,
  className?: string,
  defaultSize?: ThemeSizeSelector,
  font?: string,
  size?: ThemeSizeSelector | string,
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  weight?: string
}

const defaults = {
  h1: {
    size: 'xXLarge',
    weight: '700'
  },
  h2: {
    size: 'xLarge',
    weight: '600'
  },
  h3: {
   size: 'large',
   weight: '600'
  },
  h4: {
    size: 'medium',
    weight: '500'
  },
  h5: {
    size: 'small',
    weight: '400'
  },
  h6: {
    size: 'small',
    weight: '400'
  }
}

const setFont = ({ font, size, tag, theme, weight }: HeaderProps) => css`
  font-family: ${font || theme.font.family.headings[tag]};
  font-size: ${size};
  font-weight: ${weight || defaults[tag].weight};
`

const StyledHeader = atom.h1`
  ${setFont}
  ${setProps.color}
`

const Header: React.SFC<HeaderProps> = ({
  size,
  tag = 'h1',
  ...props
}) => {
  const defaultSize = defaults[tag].size
  const getSize = size || props.theme.font.size[defaultSize]
  const El = StyledHeader.withComponent(tag)
  return <El {...props} size={getSize} />
}

export default Header
