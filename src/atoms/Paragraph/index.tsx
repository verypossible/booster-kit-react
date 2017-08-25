import * as React from 'react'
import atom from 'ui'

import { ParagraphProps } from './Props'

const styles = ({ color, theme, invert }: ParagraphProps) => `
  color: ${color || (!invert && theme.colors.primaryColor) || (invert && theme.colors.primaryColorInverted) || '#000'}
`

const Component: React.SFC<ParagraphProps> = ({ children, className }) => <p className={className}>{children}</p>

const Paragraph = atom(Component)`
  ${styles}
`

export default Paragraph
