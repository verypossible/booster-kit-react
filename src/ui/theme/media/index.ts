import { css } from 'ui'
import breakpoints from '../breakpoints'

const media: () => MediaQueries = Object.keys(breakpoints).reduce((accumulator: any, label: string): any => {
  const emSize = breakpoints[label]
  accumulator[label] = (args: any): any => css`
    @media (max-width: ${emSize}) {
      ${css(args)}
    }
  `
  return accumulator
}, {})

export default media
