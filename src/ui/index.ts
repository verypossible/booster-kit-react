import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule, ThemedStyledProps } from 'styled-components'

import renderGlobalStyles from './globals'
import themes from './theme'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>

export type WithTheme<P> = ThemedStyledProps<P, ThemeInterface>

export {
  css,
  injectGlobal,
  keyframes,
  renderGlobalStyles,
  themes,
  ThemeProvider
}

export default styled
