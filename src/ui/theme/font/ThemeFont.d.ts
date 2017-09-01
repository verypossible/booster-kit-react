declare interface ThemeFont {
  font?: {
    family?: {
      headings?: {
        h1?: string,
        h2?: string,
        h3?: string,
        h4?: string,
        h5?: string,
        h6?: string
      },
      text?: string
    },
    size?: ThemeSizeOptions
  }
}
