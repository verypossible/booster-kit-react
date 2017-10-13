import { getDisplay, setUnit } from '../helpers'
import { SetDisplay } from '../helpers/getDisplay'
import { css } from '../index'

import { Display } from './common'

interface SizeObject {
  bottom?: string,
  left?: string,
  right?: string,
  top?: string
}

export type Justify = 'space-around' | 'space-between' | 'space-evenly'

export type TextAlign = 'left' | 'center' | 'right'

export type Align = (
  'start' |
  'end' |
  'center' |
  'stretch' |
  'auto' |
  'normal' |
  'baseline' |
  'first baseline' |
  'last baseline'
)

export interface Spacing extends SetDisplay, Theme {
  align?: Align | Justify,
  alignItems?: Align,
  alignSelf?: Align,
  display?: Display,
  justify?: Align | Justify,
  justifyItems?: Align,
  justifySelf?: Align,
  margin?: ThemeSizeSelector | SizeObject,
  pad?: ThemeSizeSelector | SizeObject,
  textAlign?: TextAlign
}

const formats = {
  default: val => val,
  flex: val => val !== 'center' ? `flex-${val}` : val,
  grid: val => val
}

const spacing = ({
  align,
  alignItems,
  alignSelf,
  display,
  justify,
  justifyItems,
  justifySelf,
  margin,
  pad,
  textAlign,
  theme,
  ...props
}: Spacing) => {
  const useDisplay = display || getDisplay(props)
  const format = formats[useDisplay] || formats.default
  return css`
    ${justifyItems && `justify-items: ${format(justifyItems)};`}
    ${justify && `justify-content: ${format(justify)};`}
    ${justifySelf && `justify-self: ${format(justifySelf)};`}
    ${alignItems && `align-items: ${format(alignItems)};`}
    ${align && `align-content: ${format(align)};`}
    ${alignSelf && `align-self: ${format(alignSelf)};`}
    ${pad && `padding: ${setUnit(pad, theme.layout.pad)};`}
    ${margin && `margin: ${setUnit(margin, theme.layout.margin)};`}
    ${textAlign && `text-align: ${textAlign};`}
  `
}

export default spacing
