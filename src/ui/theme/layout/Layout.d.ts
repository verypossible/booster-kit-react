declare type ThemeLayoutSizeSelector = '1/2' | '1/4' | '3/4' | 'full' | 'fullvh'

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
