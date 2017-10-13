import { css } from '../index'

type FlexFlow = (
  'row' |
  'row-reverse' |
  'column' |
  'column-reverse' |
  'nowrap' |
  'wrap' |
  'wrap-reverse' |
  'row nowrap' |
  'column wrap' |
  'column-reverse wrap reverse'
)

export interface Flex {
  basis?: string,
  direction?: string,
  flow?: FlexFlow,
  grow?: string,
  order?: string,
  shrink?: string
}

const flexProps = ({
  basis,
  direction,
  flow,
  grow,
  order,
  shrink
}: Flex) => css`
  ${basis && `flex-basis: ${basis};`}
  ${direction && `flex-direction: ${direction};`}
  ${grow && `flex-grow: ${grow};`}
  ${flow && `flex-flow: ${flow};`}
  ${order && `flex-order: ${order};`}
  ${shrink && `flex-shrink: ${shrink};`}
`

export default flexProps
