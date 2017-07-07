import styled from 'ui'

interface SpanProps {
  color?: string,
  theme?: ThemeInterface,
}

const base = ({ theme, color }: SpanProps) => `
  color: ${color ? theme.colors[color] : theme.colors.accent};
`

export default styled.span`
  ${base}
`
