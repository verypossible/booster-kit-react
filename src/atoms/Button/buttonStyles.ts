const flat = ({
  background,
  color,
  theme: { colors, transitions },
  fill
}: Button) => {
  const matchBg = background || colors[color] || color
  const matchColor = colors[color] || color
  const setColor = invert => !invert ? (fill ? '#FFF' : matchColor) : (fill ? matchColor : '#FFF')
  const setBg = invert => !invert ? (fill ? matchBg : '#FFF') : (fill ? '#FFF' : matchBg)
  return `
    color: ${setColor()};
    background-color: ${setBg()};
    border-color: ${setColor()};

    &:hover {
      color: ${setColor(true)};
      background-color: ${setBg(true)};
      transition: ${transitions.easeInOut300}
    }

    > svg {
      color: ${setColor()};

      &:hover {
        color: ${setColor(true)};
      }
    }
  `
}

const social = ({
  background = '#000',
  color = '#FFF'
}: Button) => `
  color: ${color};
  background-color: ${background};
`

export default {
  flat,
  social
}
