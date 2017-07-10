import atom, { css } from 'ui'

/* CSS Grid Docs:
   - https://css-tricks.com/snippets/css/complete-guide-grid/
   - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
*/

const gridItemSettings = ({
  area,
  column: [ columnStart, columnEnd ],
  row: [ rowStart, rowEnd ],
  justifySelf,
  theme: { colors, paddings },
  inverse,
  padding
}: GridItem) => css`
  ${columnStart && `grid-column: ${columnStart} / ${columnEnd};`}
  ${rowStart && `grid-row: ${rowStart} / ${rowEnd};`}
  ${area && `grid-area: ${area};`}
  ${justifySelf && `justify-self: ${justifySelf};`}
  ${`background: ${inverse ? colors.primaryBackgroundInverted : colors.primaryBackground};`}
   padding: ${padding ? paddings[padding] : paddings.medium};
`

export default atom.div`
  ${gridItemSettings}
  height: 100%;
`
