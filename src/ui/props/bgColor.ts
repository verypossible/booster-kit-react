import { css } from '../index'

export interface BgColor extends Theme {
  background?: string,
  invertBg?: boolean,
}

const backgroundColor = ({ background, invertBg, theme }: BgColor) => css`
  ${(background || invertBg) && `background-color: ${
    theme.colors[background] ||
    (invertBg && theme.colors.backgroundInverse) ||
    background
  };`}
`

export default backgroundColor
