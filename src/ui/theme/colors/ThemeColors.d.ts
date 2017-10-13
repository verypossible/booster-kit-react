/** Used to match string key when passing in a color prop */
declare type ThemeColorSelector = (
  'action' |
  'backgroundDark' |
  'backgroundLight' |
  'dark' |
  'darkGray' |
  'light' |
  'lightGray' |
  'background' |
  'backgroundInverse' |
  'primary' |
  'primaryInverse'
)

declare interface ThemeColors {
  colors?: {
    action?: string,
    backgroundDark?: string
    backgroundLight?: string,
    dark?: string,
    darkGray?: string,
    light?: string,
    lightGray?: string,
    background?: string,
    backgroundInverse?: string,
    primary?: string,
    primaryInverse?: string
  }
}
