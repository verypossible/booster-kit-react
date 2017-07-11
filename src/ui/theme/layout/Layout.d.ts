declare type ThemeLayoutSizeSelector = 'full' | 'half' | 'quarter'

declare interface ThemeLayoutSizes {
  full?: string,
  half?: string,
  quarter?: string
}

declare interface ThemeLayoutConfig {
  pad?: ThemeSizeOptions,
  margin?: ThemeSizeOptions,
  height?: ThemeLayoutSizes,
  width?: ThemeLayoutSizes
}

declare interface ThemeLayout {
  layout?: ThemeLayoutConfig
}
