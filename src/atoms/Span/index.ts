import atom, { css } from 'ui'
import { layout, Layout } from 'ui/helpers'

interface Font {
  size: string,
  weight: string
}

declare interface Span extends Layout {
  alignVertical?: string,
  color?: string,
  font?: Font,
  line?: string,
  status?: ThemeStatusSelector
}

const styles = ({ alignVertical, font, line, theme, color, status }: Span) => css`
  color: ${theme.colors[color] || theme.status[status] || color || '#000'};
  font-family: Helvetica;
  font-size: ${font && theme.font.size[font.size] || font && font.size || '1em'};
  font-weight: ${font && font.weight || 'normal'};
  ${alignVertical && `align-vertical: ${alignVertical};`}
  ${line && `line-height: ${line};`}
`

const Span = atom.span`
  ${layout}
  ${styles}
`
export default Span
