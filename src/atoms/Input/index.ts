import atom from 'ui'

const base = ({}: Input) => `
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
  width: 100%;
  height: 2.5rem;
  margin: 0 0;
  padding: .5rem .5rem;
  position: relative;
  background: primaryBackgroundInverted;
  border: .0625rem solid lightGray;
  outline: none;
  font-family: inherit;
  font-size: .88rem;
  line-height: 150%;
  color: primaryColor;
  transition: all quadInOut200;

  &:focus, &:target {
    background: primaryBackground;
    border-color: primaryBackground;
    color: primaryBackgroundInverted;
  }

  &::placeholder {
    color: lightGray;
  }
`

const Input = atom.input`
  ${base}
`
export default Input
