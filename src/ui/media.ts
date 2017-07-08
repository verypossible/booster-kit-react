import { css } from './index'
import { breakpoints } from './variables'

interface Media {
  [key: string]: () => void,
  large?: () => void,
  medium?: () => void,
  small?: () => void
}

type Acc = Media | {}

const getBreakpoints = breakpoints as Breakpoints

export const media: () => Acc = Object.keys(getBreakpoints).reduce((accumulator: any, label: string): any => {
  const emSize = getBreakpoints[label] / 16
  accumulator[label] = (args: any): any => css`
    @media (max-width: ${emSize}em) {
      ${css(args)}
    }
  `
  return accumulator
}, {})
