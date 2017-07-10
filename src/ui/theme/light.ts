import colors from './colors'
import common from './common'

const light = {
  colors: {
    ...colors.common,
    ...colors.theme.light
  },
  ...common
}

export default light
