declare interface ButtonStyles extends Theme {
  fill?: boolean
  text?: string
  type?: string
  background?: string
  color?: string
}

declare interface Button extends ButtonStyles {
  children: any
  disabled?: boolean
  icon?: string
  iconColor?: string
  id?: string
  onClick?: any
  status?: ThemeStatusSelector
}
