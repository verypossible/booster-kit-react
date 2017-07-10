const flat = ({
  theme,
  fill = false
}: Button) => `
  color: ${fill ? '#FFF' : theme.colors.action};
  background-color: ${fill ? theme.colors.action : '#FFF'};
  border-color: ${theme.colors.action};
  &:hover {
    color: ${fill ? theme.colors.action : '#FFF'};
    background-color: ${fill ? '#FFF' : theme.colors.action};
  }
`

export default {
  flat
}
