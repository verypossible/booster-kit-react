const setBackground = ({ background, inverse, theme }) => `
  ${
    theme.colors[background] ||
    (inverse && theme.colors.backgroundInverse) ||
    background ||
    'none'
  }
`

export default setBackground
