import { hasUnit } from '../helpers'
import { css } from '../index'

export type Display = 'none' | 'inline' | 'inline-block' | 'block' | 'grid' | 'flex'

export interface Common extends Theme {
  bgColor?: string,
  display?: Display,
  height?: ThemeLayoutSizeSelector | string,
  icon?: string,
  inline?: boolean,
  inlineBlock?: boolean,
  inverse?: boolean,
  noFlex?: boolean,
  round?: string,
  width?: ThemeSizeSelector | string
}

const common = ({
  bgColor,
  display,
  height,
  icon,
  round,
  theme,
  width
}: Common) => css`
  ${bgColor && `background-color: ${bgColor};`}
  ${round && `border-radius: ${round}em;`}
  ${display && `display: ${display}`}
  ${height && `height: ${theme.layout.height[height] || `${height}em`};`}
  ${width && `width: ${
    icon && (theme.icons.size[width] ||
    !icon && theme.layout.width[width] ||
    hasUnit(width) && width ||
    `${width}em`
  };`}
`

export default common
