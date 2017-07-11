interface FontSizeConfig extends ThemeSizeOptions {
  [key: string]: string
}

declare interface ThemeFont {
  font?: {
    family?: {
      [key: string]: string,
      headings?: string,
      text?: string
    },
    size?: FontSizeConfig
  }
}
