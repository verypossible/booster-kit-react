declare interface ThemeInterface {
  primaryColor?: string,
  primaryColorInverted?: string,
  colors?: {
    [key: string]: string,
    light?: string,
    dark?: string,
    action?: string,
    accent?: string
  }
  breakpoints?: {
    small?: number,
    medium?: number,
    large?: number
  },
  font?: {
    base?: string,
    family?: string,
    large?: string,
    small?: string,
    xLarge?: string,
    xSmall?: string,
    xXLarge?: string
  },
  gutterColumn?: string,
  gutterRow?: string,
  headings?: {
    family?: string
  },
  icon?: {
    color?: string,
    size?: string
  },
  transition?: string
}
