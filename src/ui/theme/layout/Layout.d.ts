declare type ThemeLayoutSizeSelector = '1/2' | '1/4' | '3/4' | 'full' | 'fullvh'

declare interface ThemeLayoutSizes {
  '1/2'?: string,
  '1/4'?: string,
  '3/4'?: string,
  'full'?: string,
  'fullvh'?: string
}

declare interface ThemeLayout {
  layout?: {
    pad?: ThemeSizeOptions,
    margin?: ThemeSizeOptions,
    height?: ThemeLayoutSizes,
    width?: ThemeLayoutSizes
  }
}
