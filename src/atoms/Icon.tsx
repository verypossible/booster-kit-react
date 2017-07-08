import * as React from 'react'

import styled from 'ui'

interface IconProps {
  color?: string,
  theme?: ThemeInterface,
  icon?: string,
  className?: string
}

const styles = ({ theme, color }: IconProps) => `
  color: ${(color && theme.colors[color]) ? theme.colors[color] : color};
`

const Icon: React.SFC<IconProps> = ({ className, icon }) => <i className={`${className} icon-${icon}`} />

export default styled(Icon)`
  ${styles}
`
