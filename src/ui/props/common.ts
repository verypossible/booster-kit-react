import { getDisplay, hasUnit } from '../helpers'
import { SetDisplay } from '../helpers/getDisplay'
import { css } from '../index'

export type Display = 'none' | 'inline' | 'inline-block' | 'block' | 'grid' | 'flex'

export interface Common extends SetDisplay, Theme {
  display?: Display,
  height?: ThemeLayoutSizeSelector | string,
  icon?: string,
  inverse?: boolean,
  round?: string,
  width?: ThemeSizeSelector | string
}

const common = ({
  display,
  height,
  icon,
  round,
  theme,
  width,
  ...props
}: Common) => {
  const autoDisplay = getDisplay(props)
  const setDisplay = display || autoDisplay
  const iconWidth = icon && theme.icons.size[width]
  const themeWidth = !icon && theme.layout.width[width]
  const customUnit = (v: string) => hasUnit(v) && v
  const defaultUnit = (v: string): string => `${v}em`
  const useDefault = setDisplay && setDisplay === ('flex' || 'grid')
  return css`
    ${setDisplay && `display: ${setDisplay};`}
    ${round && `border-radius: ${customUnit(round) || defaultUnit(round)};`}
    ${height && `height: ${theme.layout.height[height] || customUnit(height) || defaultUnit(height)};`}
    ${!height && useDefault && `height: ${theme.layout.height.full};`}
    ${width && `width: ${iconWidth || customUnit(width) || themeWidth || defaultUnit(width)};`}
    ${!width && useDefault && `width: ${theme.layout.width.full};`}
  `
}

export default common
