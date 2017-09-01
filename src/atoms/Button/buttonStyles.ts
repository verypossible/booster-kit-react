import { ButtonProps } from './ButtonProps'

const flat = ({
  background,
  color,
  invert,
  theme,
  fill
}: ButtonProps): string => {
  const matchBg = !invert && theme.colors.background || invert && theme.colors.backgroundInverse || background
  const matchColor = (
    theme.colors[color] ||
    color ||
    invert && theme.colors.primary ||
    !invert && theme.colors.primaryInverse
  )
  const setColor = (swap?: boolean) => !swap ? (fill ? '#FFF' : matchColor) : (fill ? matchColor : '#FFF')
  const setBg = (swap?: boolean) => !swap ? (fill ? matchBg : '#FFF') : (fill ? '#FFF' : matchBg)
  return `
    color: ${setColor(true)};
    background-color: ${setBg(true)};
    border-color: ${setColor()};

    &:hover {
      color: ${setColor()};
      background-color: ${setBg()};
      transition: ${theme.transitions.easeInOut300}
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
}: ButtonProps): string => `
  color: ${color};
  background-color: ${background};
`

export default {
  flat,
  social
}
