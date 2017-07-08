import { breakpoints, colors, fonts as font } from '../variables'

const { status, ...colorOptions } = colors

export default {
  breakpoints,
  colors: {
    ...colorOptions
  },
  font,
  gutterColumn: '2em',
  gutterRow: '2em',
  headings: {
    family: 'Helvetica Neue'
  },
  icon: {
    color: 'gray',
    size: '15px'
  },
  pad: {
    large: '1.2em',
    medium: '1em',
    small: '0.8em',
    xLarge: '1.5em'
  },
  status: {
    ...status
  },
  transition: '300ms ease-in-out'
}
