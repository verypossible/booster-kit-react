import { css } from '../index'

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

export type FlexDirectionWrap = 'row nowrap' | 'column wrap' | 'column-reverse wrap reverse'

export type FlexFlow = FlexDirection & FlexWrap & FlexDirectionWrap

export interface Flex {
  basis?: string,
  direction?: FlexDirection,
  flow?: FlexFlow,
  grow?: string,
  order?: string,
  shrink?: string,
  wrap?: FlexWrap
}

const flex = ({
  basis,
  direction,
  flow,
  grow,
  order,
  shrink,
  wrap
}: Flex) => css`
  ${basis && `flex-basis: ${basis};`}
  ${direction && `flex-direction: ${direction};`}
  ${grow && `flex-grow: {grow};`}
  ${flow && `flex-flow: ${flow || 'row'};`}
  ${order && `flex-order: ${order};`}
  ${shrink && `flex-shrink: ${shrink};`}
  ${wrap && `flex-wrap: ${wrap};`}
`

export default flex
