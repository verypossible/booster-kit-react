const flat = ({
  theme,
  fill
}: Button) => `
  color: ${fill ? '#FFF' : theme.colors.action};
  background-color: ${fill ? theme.colors.action : '#FFF'};
  border-color: ${theme.colors.action};

  &:hover {
    color: ${fill ? theme.colors.action : '#FFF'};
    background-color: ${fill ? '#FFF' : theme.colors.action};
    transition: ${theme.transitions.easeInOut300}
  }
`

const notFlat = ({
  fill
}: Button) => `
  color: ${fill ? 'green' : '#FFF'};
`

export default {
  flat,
  notFlat
}
