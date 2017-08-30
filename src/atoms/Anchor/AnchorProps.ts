interface Border {
  right?: string,
  left?: string,
  top?: string,
  bottom?: string
}

export interface AnchorProps {
  alignVertical?: string,
  apply?: string,
  border?: Border | string,
  children?: any,
  color?: string,
  inline?: boolean,
  height?: string,
  id?: string,
  margin?: string,
  navLink?: boolean,
  pad?: string,
  to?: string | object,
  type?: string
}
