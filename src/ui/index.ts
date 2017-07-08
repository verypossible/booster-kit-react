import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule, ThemedStyledProps } from 'styled-components'

import renderGlobalStyles from './globals'
import media from './media'
import theme from './theme'

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<any> as ThemedStyledComponentsModule<ThemeInterface>

export type ThemeProps<P> = ThemedStyledProps<P, ThemeInterface>

export {
  css,
  injectGlobal,
  keyframes,
  media,
  renderGlobalStyles,
  theme,
  ThemeProvider
}

export default styled
