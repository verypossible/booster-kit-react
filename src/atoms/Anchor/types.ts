export interface AnchorStyles extends Theme {
  color?: string
}

export interface AnchorProps {
  children?: any,
  className?: string,
  external?: boolean,
  id?: string,
  navLink?: boolean,
  to?: string | object
}
