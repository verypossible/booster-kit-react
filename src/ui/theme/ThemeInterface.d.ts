declare interface Breakpoints {
  small?: number,
  medium?: number,
  large?: number
}

declare interface Colors {
  [key: string]: string,
  light?: string,
  lightGray?: string,
  darkGray?: string,
  dark?: string,
  action?: string,
  backgroundLight?: string,
  backgroundDark?: string
}

declare interface Status {
  alert?: string,
  ok?: string,
  warning?: string
}

declare interface Padding {
  small?: string,
  medium?: string,
  large?: string,
  xLarge?: string
}

declare interface Fonts {
  base?: string,
  family?: string,
  large?: string,
  small?: string,
  xLarge?: string,
  xSmall?: string,
  xXLarge?: string
}

declare interface ThemeInterface {
  primaryColor?: string,
  primaryColorInverted?: string,
  primaryBackground?: string,
  primaryBackgroundInverted?: string,
  colors?: Colors,
  status?: Status,
  breakpoints?: Breakpoints
  font?: Fonts,
  pad?: Padding,
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
