import * as React from 'react'

import atom from 'ui'
import * as setProps from 'ui/props'
import { Color, Font, Spacing } from 'ui/props/types'

export interface Paragraph extends Color, Font, Spacing {
  className?: string
}

const P: React.SFC<Paragraph> = ({ children, className }) => <p className={className}>{children}</p>

const RenderParagraph = atom(P)`
  ${setProps.color}
  ${setProps.font}
  ${setProps.spacing}
`

export default RenderParagraph
