import { css } from '../index'

export interface Color extends Theme {
  color?: ThemeColorSelector | string,
  invert?: boolean,
  status?: ThemeStatusSelector
}

const textColor = ({
  color,
  invert,
  status,
  theme
}: Color) => {
  const statusColor = status && theme.status[status]
  const themeColor = theme.colors[color]
  const inverse = invert && theme.colors.primaryInverse
  const primary = theme.colors.primary
  return css`
    color: ${statusColor || inverse || themeColor || color || primary};
  `
}

export default textColor
