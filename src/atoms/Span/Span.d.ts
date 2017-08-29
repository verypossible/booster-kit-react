declare interface Span extends Theme {
  area?: string,
  color?: string,
  status?: ThemeStatusSelector,
  pad?: ThemeSizeSelector | string,
  margin?: ThemeSizeSelector | string
}
