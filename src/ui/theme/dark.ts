import colors from './colors'
import common from './common'

const dark = {
  colors: {
    ...colors.common,
    ...colors.theme.dark
  },
  ...common
}

export default dark
