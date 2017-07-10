declare interface ThemeMinSizeOptions {
  small?: string,
  medium?: string,
  large?: string
}

declare type ThemeSizeSelector = 'small' | 'medium' | 'large' | 'xLarge' | 'xXLarge' | string

declare interface ThemeSizeOptions extends ThemeMinSizeOptions {
  xLarge?: string,
  xSmall?: string,
  xXLarge?: string
}

declare interface ThemeStatus {
  [key: string]: string,
  alert?: string,
  ok?: string,
  warning?: string
}

declare interface ThemeInterface extends ThemeBreakpoints, ThemeColors, ThemeFont, ThemeGrid, // tslint:disable-line
 ThemeIcons, ThemeLayout, ThemeTransitions, Media {
  status?: ThemeStatus
}

declare interface Theme {
  theme?: ThemeInterface
}
