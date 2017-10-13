import * as React from 'react'

import atom, { css } from 'ui'
import * as setProps from 'ui/props'
import { Color, Common, Font, Spacing } from 'ui/props/types'

interface SpanProps extends Color, Common, Font, Spacing {
  alignVertical?: string,
  className?: string,
  id?: string
}

const spanStyles = ({ alignVertical }: SpanProps) => css`
  ${alignVertical && `align-vertical: ${alignVertical};`}
`

const Span: React.SFC<SpanProps> = ({ className, children }) => <span className={className}>{children}</span>

const StyledSpan = atom(Span)`
  ${setProps.color}
  ${setProps.common}
  ${setProps.font}
  ${setProps.spacing}
  ${spanStyles}
`
export default StyledSpan
