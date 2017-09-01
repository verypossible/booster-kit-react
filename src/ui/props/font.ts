import { css } from '../index'

export interface Font extends Theme {
  font?: string,
  fontSize?: string,
  fontWeight?: string,
  line?: string
}

const setFont = ({
  font,
  fontSize,
  fontWeight,
  line,
  theme
}: Font) => css`
  font-family: ${font || theme.font.family.text};
  font-size: ${(fontSize && theme.font.size[fontSize]) || (fontSize && `${fontSize}em`) || theme.font.size.medium};
  font-weight: ${fontWeight || 'normal'};
  ${line && `line-height: ${line}em;`}
`

export default setFont
