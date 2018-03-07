import { css } from 'ui'

const breakpoints = {
  large: '76.5em',
  medium: '48em',
  small: '20em'
}

const media: () => MediaQueries = Object.keys(breakpoints).reduce(
  (accumulator: any, label: string): any => {
    const emSize = breakpoints[label]
    accumulator[label] = (args: any): any => css`
      @media (max-width: ${emSize}) {
        ${css(args)};
      }
    `
    return accumulator
  },
  {}
)

export default media
