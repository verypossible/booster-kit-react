import { css } from '../index'

interface SizeObject {
  bottom?: string,
  left?: string,
  right?: string,
  top?: string
}

export type Justify = 'start' | 'center' | 'between' | 'end'

export type TextAlign = 'left' | 'center' | 'right'

export type AlignItems = 'start' | 'end' | 'center' | 'stretch'

export type AlignContent = 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'

export interface Spacing extends Theme {
  align?: AlignItems,
  alignContent?: AlignContent,
  alignSelf?: AlignItems,
  justify?: Justify,
  justifyContent?: AlignContent,
  justifySelf?: Justify,
  margin?: ThemeSizeSelector | SizeObject,
  pad?: ThemeSizeSelector | SizeObject,
  prefix: 'default' | 'flex' | 'grid',
  textAlign?: TextAlign
}

const setUnit = (value, theme) => {
  if (typeof value === 'object') {
    const set = v => v && theme[v] || v && `${v}em` || '0'
    return (
      `${set(value.top)} ${set(value.right)} ${set(value.bottom)} ${set(value.left)}`
    ))
  }

  return theme[value] || `${value}em`
}

const formats = {
  default: val => val,
  flex: val => val !== 'center' ? `flex-{val}` : val,
  grid: val => val
}

const spacing = ({
  align,
  alignContent,
  alignSelf,
  justify,
  justifyContent,
  justifySelf,
  margin,
  pad,
  prefix,
  textAlign,
  theme
}: Spacing) => {
  const format = formats[prefix]
  return css`
    ${justify && `justify-items: ${format(justify)};`}
    ${justifyContent && `justify-content: ${format(justifyContent)};`}
    ${justifySelf && `justify-self: ${format(justifySelf)};`}
    ${align && `align-items: ${format(align)};`}
    ${alignContent && `align-content: ${format(alignContent)};`}
    ${alignSelf && `align-self: ${format(alignSelf)};`}
    ${pad && `padding: ${setUnit(pad, theme.layout.pad)};`}
    ${margin && `margin: ${setUnit(margin, theme.layout.margin)};`}
    ${textAlign && `text-align: ${textAlign};`}
  `
}

export default spacing
