const flat = ({
  background,
  theme,
  fill
}: Button) => `
  color: ${fill ? '#FFF' : theme.colors.action};
  background-color: ${fill ? (background || theme.colors.action) : '#FFF'};
  border-color: ${theme.colors.action};

  &:hover {
    color: ${fill ? theme.colors.action : '#FFF'};
    background-color: ${fill ? '#FFF' : (background || theme.colors.action)};
    transition: ${theme.transitions.easeInOut300}
  }

  > svg {
    color: ${fill ? '#FFF' : theme.colors.action};

    &:hover {
      color: ${fill ? theme.colors.action : '#FFF'};
    }
  }
`

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
