import * as styledComponents from 'styled-components'
import {
  ThemedStyledComponentsModule,
  ThemedStyledProps
} from 'styled-components'

import renderGlobalStyles from './globals'
import theme from './theme'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>

export type ThemeProps<P> = ThemedStyledProps<P, ThemeInterface>

export {
  css,
  injectGlobal,
  keyframes,
  renderGlobalStyles,
  theme,
  ThemeProvider
}

export default styled
