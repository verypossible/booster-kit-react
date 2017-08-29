import * as React from 'react'

import atom from 'ui'

export interface Props extends Theme {
  className?: string,
  color?: string,
  invert?: boolean
}

const styles = ({ color, theme, invert }: Props) => `
  color: ${color || (!invert && theme.colors.primary) || (invert && theme.colors.primaryInverse) || '#000'}
`

const P: React.SFC<Props> = ({ children, className }) => <p className={className}>{children}</p>

const Paragraph = atom(P)`
  ${styles}
`

export default Paragraph
